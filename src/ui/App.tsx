import {
    Accordion,
    ActionIcon,
    Alert,
    Badge,
    Box,
    Button,
    Code,
    Container,
    CopyButton,
    Divider,
    FileButton,
    Grid,
    Group,
    JsonInput,
    MultiSelect,
    NumberInput,
    Paper,
    PasswordInput,
    ScrollArea,
    SegmentedControl,
    Select,
    Stack,
    Switch,
    Tabs,
    TagsInput,
    Text,
    Textarea,
    TextInput,
    ThemeIcon,
    Title,
    Tooltip,
} from '@mantine/core';
import {
    IconAlertTriangle,
    IconCircleCheck,
    IconCopy,
    IconDownload,
    IconEye,
    IconFilter,
    IconInfoCircle,
    IconKey,
    IconPlus,
    IconRefresh,
    IconSearch,
    IconTrash,
    IconUpload,
    IconWand,
} from '@tabler/icons-react';
import {useMemo, useState} from 'react';

import {exampleCatalog, type ExampleCatalogItem} from '../domain/exampleCatalog.generated';
import {presets} from '../domain/presets';
import {validateConfig} from '../domain/validation';
import {
    defaultConfig,
    FieldDefinition,
    getProtocol,
    InboundConfig,
    inboundProtocols,
    JsonValue,
    Language,
    OutboundConfig,
    outboundProtocols,
    ProtocolDefinition,
    pruneEmpty,
    randomBase64Url,
    randomHex,
    randomToken,
    realityFields,
    sectionFields,
    SecurityProtocol,
    sockoptFields,
    StreamSettings,
    tlsFields,
    transportFields,
    TransportProtocol,
    XrayConfig,
} from '../domain/xray';

type RecordValue = Record<string, JsonValue>;

const labels = {
    en: {
        title: 'Xray Configurator',
        subtitle: 'Server-side JSON builder for Xray-core with protocol-aware forms, import and export.',
        visual: 'Builder',
        json: 'JSON',
        catalog: 'Catalog',
        import: 'Import',
        export: 'Export',
        copy: 'Copy',
        reset: 'Reset',
        addInbound: 'Add inbound',
        addOutbound: 'Add outbound',
        global: 'Global sections',
        inbounds: 'Inbounds',
        outbounds: 'Outbounds',
        stream: 'Stream settings',
        security: 'Security',
        sockopt: 'Socket options',
        advanced: 'Advanced',
        rawJson: 'Raw JSON',
        applyJson: 'Apply JSON',
        invalidJson: 'Invalid JSON',
        validJson: 'JSON is valid',
        tag: 'Tag',
        listen: 'Listen',
        port: 'Port',
        protocol: 'Protocol',
        enabled: 'Enabled',
        language: 'Language',
        generate: 'Generate',
        presets: 'Presets',
        validation: 'Validation',
        noIssues: 'No validation issues found.',
        search: 'Search parameters',
        advancedMode: 'Advanced mode',
        addClient: 'Add client',
        addRule: 'Add rule',
        addServer: 'Add server',
        load: 'Load',
        examples: 'Examples',
        role: 'Role',
        all: 'All',
        source: 'Source',
        docsNote: 'The UI covers current server-focused Xray sections and keeps raw JSON access for experimental or newly added fields.',
    },
    ru: {
        title: 'Xray Configurator',
        subtitle: 'Конструктор серверного JSON для Xray-core с protocol-aware формами, импортом и экспортом.',
        visual: 'Конструктор',
        json: 'JSON',
        catalog: 'Каталог',
        import: 'Импорт',
        export: 'Экспорт',
        copy: 'Копировать',
        reset: 'Сброс',
        addInbound: 'Добавить inbound',
        addOutbound: 'Добавить outbound',
        global: 'Глобальные секции',
        inbounds: 'Inbounds',
        outbounds: 'Outbounds',
        stream: 'Stream settings',
        security: 'Security',
        sockopt: 'Socket options',
        advanced: 'Advanced',
        rawJson: 'Raw JSON',
        applyJson: 'Применить JSON',
        invalidJson: 'Некорректный JSON',
        validJson: 'JSON корректен',
        tag: 'Tag',
        listen: 'Listen',
        port: 'Port',
        protocol: 'Protocol',
        enabled: 'Включено',
        language: 'Язык',
        generate: 'Сгенерировать',
        presets: 'Пресеты',
        validation: 'Валидация',
        noIssues: 'Проблем валидации не найдено.',
        search: 'Поиск параметров',
        advancedMode: 'Advanced mode',
        addClient: 'Добавить клиента',
        addRule: 'Добавить правило',
        addServer: 'Добавить сервер',
        load: 'Загрузить',
        examples: 'Примеры',
        role: 'Роль',
        all: 'Все',
        source: 'Источник',
        docsNote: 'UI покрывает актуальные серверные секции Xray и оставляет raw JSON для экспериментальных или новых полей.',
    },
} as const;

const streamKeyByNetwork: Record<TransportProtocol, keyof StreamSettings> = {
    raw: 'rawSettings',
    tcp: 'tcpSettings',
    ws: 'wsSettings',
    grpc: 'grpcSettings',
    xhttp: 'xhttpSettings',
    splithttp: 'splithttpSettings',
    kcp: 'kcpSettings',
    httpupgrade: 'httpupgradeSettings',
    hysteria: 'hysteriaSettings',
};

export function App() {
    const [language, setLanguage] = useState<Language>('en');
    const [config, setConfig] = useState<XrayConfig>(() => defaultConfig());
    const [jsonDraft, setJsonDraft] = useState(() => stringify(defaultConfig()));
    const [jsonError, setJsonError] = useState<string | null>(null);
    const [query, setQuery] = useState('');
    const [catalogQuery, setCatalogQuery] = useState('');
    const [catalogRole, setCatalogRole] = useState<string>('all');
    const [selectedCatalogId, setSelectedCatalogId] = useState<string>(exampleCatalog[0]?.id ?? '');
    const [advancedMode, setAdvancedMode] = useState(true);
    const t = labels[language];

    const cleanConfig = useMemo(() => pruneEmpty(config as unknown as JsonValue) as XrayConfig, [config]);
    const output = useMemo(() => stringify(cleanConfig), [cleanConfig]);
    const issues = useMemo(() => validateConfig(cleanConfig), [cleanConfig]);
    const filteredCatalog = useMemo(
        () => filterCatalog(exampleCatalog, catalogQuery, catalogRole),
        [catalogQuery, catalogRole],
    );
    const selectedCatalog = useMemo(
        () => filteredCatalog.find((item) => item.id === selectedCatalogId) ?? filteredCatalog[0] ?? exampleCatalog[0],
        [filteredCatalog, selectedCatalogId],
    );

    const syncConfig = (next: XrayConfig) => {
        setConfig(next);
        setJsonDraft(stringify(pruneEmpty(next as unknown as JsonValue) ?? {}));
        setJsonError(null);
    };

    const importFile = async (file: File | null) => {
        if (!file) return;
        const text = await file.text();
        applyJson(text);
    };

    const applyJson = (text = jsonDraft) => {
        try {
            const parsed = JSON.parse(text) as XrayConfig;
            setConfig(parsed);
            setJsonDraft(stringify(parsed));
            setJsonError(null);
        } catch (error) {
            setJsonError(error instanceof Error ? error.message : t.invalidJson);
        }
    };

    const download = () => {
        const blob = new Blob([output], {type: 'application/json;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'xray-server-config.json';
        anchor.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Box className="app-shell">
            <Box className="topbar">
                <Container fluid px="lg" py="md">
                    <Group className="topbar-content" justify="space-between" align="center">
                        <Group className="brand-block" gap="sm">
                            <ThemeIcon color="cyan" size="lg" radius="md" variant="light">
                                <IconKey size={20}/>
                            </ThemeIcon>
                            <Box>
                                <Title order={2}>{t.title}</Title>
                                <Text c="dimmed" size="sm">
                                    {t.subtitle}
                                </Text>
                            </Box>
                        </Group>
                        <Group className="topbar-actions">
                            <Select
                                aria-label={t.language}
                                data={[
                                    {value: 'en', label: 'English'},
                                    {value: 'ru', label: 'Русский'},
                                ]}
                                value={language}
                                w={130}
                                onChange={(value) => setLanguage((value as Language | null) ?? 'en')}
                            />
                            <FileButton accept="application/json,.json" onChange={importFile}>
                                {(props) => (
                                    <Button leftSection={<IconUpload size={16}/>} variant="light" {...props}>
                                        {t.import}
                                    </Button>
                                )}
                            </FileButton>
                            <Button leftSection={<IconDownload size={16}/>} onClick={download}>
                                {t.export}
                            </Button>
                        </Group>
                    </Group>
                </Container>
            </Box>

            <Container fluid className="workspace-container" py="xl" pos="relative">
                <Paper className="panel command-panel" p="md" radius="md" mb="lg">
                    <Stack gap="md">
                        <Group className="responsive-header" justify="space-between" align="flex-start">
                            <Box className="header-copy">
                                <Title order={3}>{t.presets}</Title>
                                <Text c="dimmed" size="sm">
                                    {language === 'ru' ? 'Быстрые стартовые конфигурации для типовых серверных сценариев.' : 'Fast starting points for common server-side deployments.'}
                                </Text>
                            </Box>
                            <Group className="responsive-controls">
                                <TextInput
                                    leftSection={<IconSearch size={16}/>}
                                    placeholder={t.search}
                                    value={query}
                                    onChange={(event) => setQuery(event.currentTarget.value)}
                                />
                                <Switch checked={advancedMode} label={t.advancedMode}
                                        onChange={(event) => setAdvancedMode(event.currentTarget.checked)}/>
                            </Group>
                        </Group>
                        <Box className="presets-grid">
                            {presets.map((preset) => (
                                <Tooltip key={preset.id}
                                         label={language === 'ru' ? preset.descriptionRu : preset.description}>
                                    <Button leftSection={<IconWand size={16}/>} variant="light"
                                            onClick={() => syncConfig(preset.create())}>
                                        {language === 'ru' ? preset.labelRu : preset.label}
                                    </Button>
                                </Tooltip>
                            ))}
                        </Box>
                    </Stack>
                </Paper>

                <Tabs defaultValue="builder" keepMounted={false}>
                    <Tabs.List className="workspace-tabs" mb="lg">
                        <Tabs.Tab value="builder">{t.visual}</Tabs.Tab>
                        <Tabs.Tab value="catalog">{t.catalog}</Tabs.Tab>
                        <Tabs.Tab value="json">{t.json}</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="builder">
                        <Box className="builder-layout">
                            <Stack className="builder-sidebar" gap="lg">
                                <BuilderControls
                                    advancedMode={advancedMode}
                                    language={language}
                                    query={query}
                                    onAdvancedModeChange={setAdvancedMode}
                                    onPresetLoad={syncConfig}
                                    onQueryChange={setQuery}
                                />
                                <ValidationPanel issues={issues} language={language}/>
                            </Stack>
                            <Box className="builder-main">
                                <Stack gap="lg">
                                    <GlobalSections config={config} language={language} query={query}
                                                    advancedMode={advancedMode} onChange={syncConfig}/>
                                    <InboundList config={config} language={language} query={query}
                                                 advancedMode={advancedMode} onChange={syncConfig}/>
                                    <OutboundList config={config} language={language} query={query}
                                                  advancedMode={advancedMode} onChange={syncConfig}/>
                                </Stack>
                            </Box>
                            <Box className="builder-preview">
                                <Paper className="panel json-panel" p="md" radius="md">
                                    <Group className="responsive-header" justify="space-between" mb="sm">
                                        <Title order={3}>{t.json}</Title>
                                        <Group gap="xs">
                                            <CopyButton value={output}>
                                                {({copied, copy}) => (
                                                    <Button size="xs" variant="light"
                                                            leftSection={copied ? <IconCircleCheck size={14}/> :
                                                                <IconCopy size={14}/>} onClick={copy}>
                                                        {t.copy}
                                                    </Button>
                                                )}
                                            </CopyButton>
                                            <Button size="xs" variant="subtle" color="red"
                                                    leftSection={<IconRefresh size={14}/>}
                                                    onClick={() => syncConfig(defaultConfig())}>
                                                {t.reset}
                                            </Button>
                                        </Group>
                                    </Group>
                                    <ScrollArea className="json-preview-scroll">
                                        <Code block>{output}</Code>
                                    </ScrollArea>
                                </Paper>
                            </Box>
                        </Box>
                    </Tabs.Panel>

                    <Tabs.Panel value="catalog">
                        <CatalogPanel
                            catalog={filteredCatalog}
                            catalogQuery={catalogQuery}
                            catalogRole={catalogRole}
                            selected={selectedCatalog}
                            language={language}
                            onQueryChange={setCatalogQuery}
                            onRoleChange={setCatalogRole}
                            onSelect={setSelectedCatalogId}
                            onLoad={(nextConfig) => syncConfig(nextConfig)}
                        />
                    </Tabs.Panel>

                    <Tabs.Panel value="json">
                        <Paper className="panel" p="md" radius="md">
                            <Stack>
                                <JsonInput
                                    classNames={{input: 'json-editor'}}
                                    autosize
                                    formatOnBlur
                                    label={t.rawJson}
                                    minRows={24}
                                    validationError={t.invalidJson}
                                    value={jsonDraft}
                                    onChange={setJsonDraft}
                                />
                                {jsonError && <Alert color="red">{jsonError}</Alert>}
                                <Group justify="space-between">
                                    <Text c={jsonError ? 'red' : 'teal'} size="sm">
                                        {jsonError ? t.invalidJson : t.validJson}
                                    </Text>
                                    <Button onClick={() => applyJson()}>{t.applyJson}</Button>
                                </Group>
                            </Stack>
                        </Paper>
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </Box>
    );
}

function BuilderControls({
                             advancedMode,
                             language,
                             query,
                             onAdvancedModeChange,
                             onPresetLoad,
                             onQueryChange,
                         }: {
    advancedMode: boolean;
    language: Language;
    query: string;
    onAdvancedModeChange: (enabled: boolean) => void;
    onPresetLoad: (config: XrayConfig) => void;
    onQueryChange: (query: string) => void;
}) {
    const t = labels[language];

    return (
        <Paper className="panel" p="md" radius="md">
            <Stack gap="md">
                <Box className="header-copy">
                    <Title order={3}>{t.presets}</Title>
                    <Text c="dimmed" size="sm">
                        {language === 'ru'
                            ? 'Быстрые серверные профили и фильтр параметров редактора.'
                            : 'Server presets and editor parameter filtering.'}
                    </Text>
                </Box>
                <TextInput
                    leftSection={<IconSearch size={16}/>}
                    placeholder={t.search}
                    value={query}
                    onChange={(event) => onQueryChange(event.currentTarget.value)}
                />
                <Switch checked={advancedMode} label={t.advancedMode}
                        onChange={(event) => onAdvancedModeChange(event.currentTarget.checked)}/>
                <Divider/>
                <Stack gap="xs">
                    {presets.map((preset) => (
                        <Tooltip key={preset.id} label={language === 'ru' ? preset.descriptionRu : preset.description}>
                            <Button fullWidth leftSection={<IconWand size={16}/>} variant="light"
                                    onClick={() => onPresetLoad(preset.create())}>
                                {language === 'ru' ? preset.labelRu : preset.label}
                            </Button>
                        </Tooltip>
                    ))}
                </Stack>
            </Stack>
        </Paper>
    );
}

function ValidationPanel({issues, language}: { issues: ReturnType<typeof validateConfig>; language: Language }) {
    const t = labels[language];
    const errors = issues.filter((issue) => issue.severity === 'error').length;
    const warnings = issues.length - errors;

    return (
        <Paper className="panel" p="md" radius="md" mb="lg">
            <Group justify="space-between" mb="sm">
                <Title order={3}>{t.validation}</Title>
                <Group gap="xs">
                    <Badge color={errors > 0 ? 'red' : 'teal'}>{errors} errors</Badge>
                    <Badge color={warnings > 0 ? 'yellow' : 'teal'}>{warnings} warnings</Badge>
                </Group>
            </Group>
            {issues.length === 0 ? (
                <Text c="teal" size="sm">{t.noIssues}</Text>
            ) : (
                <Stack gap="xs">
                    {issues.map((issue) => (
                        <Alert
                            key={`${issue.path}-${issue.message}`}
                            color={issue.severity === 'error' ? 'red' : 'yellow'}
                            icon={<IconAlertTriangle size={16}/>}
                            py="xs"
                        >
                            <Text size="sm" fw={600}>{issue.path}</Text>
                            <Text size="sm">{language === 'ru' ? issue.messageRu : issue.message}</Text>
                        </Alert>
                    ))}
                </Stack>
            )}
        </Paper>
    );
}

function CatalogPanel({
                          catalog,
                          catalogQuery,
                          catalogRole,
                          selected,
                          language,
                          onQueryChange,
                          onRoleChange,
                          onSelect,
                          onLoad,
                      }: {
    catalog: ExampleCatalogItem[];
    catalogQuery: string;
    catalogRole: string;
    selected?: ExampleCatalogItem;
    language: Language;
    onQueryChange: (query: string) => void;
    onRoleChange: (role: string) => void;
    onSelect: (id: string) => void;
    onLoad: (config: XrayConfig) => void;
}) {
    const t = labels[language];

    return (
        <Grid className="catalog-layout" align="flex-start">
            <Grid.Col span={{base: 12, lg: 3}}>
                <Stack gap="lg">
                    <Paper className="panel" p="md" radius="md">
                        <Group className="responsive-header" justify="space-between" mb="md">
                            <Box className="header-copy">
                                <Title order={3}>{t.presets}</Title>
                                <Text c="dimmed" size="sm">
                                    {language === 'ru'
                                        ? 'Оптимизированные пресеты, собранные по повторяющимся паттернам из официальных примеров.'
                                        : 'Optimized presets derived from recurring patterns in the official examples.'}
                                </Text>
                            </Box>
                            <Badge color="cyan" variant="light">{presets.length}</Badge>
                        </Group>
                        <Box className="catalog-card-grid">
                            {presets.map((preset) => (
                                <Paper key={preset.id} p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
                                    <Stack gap="xs">
                                        <Group justify="space-between" align="flex-start">
                                            <Text fw={700}>{language === 'ru' ? preset.labelRu : preset.label}</Text>
                                            <ThemeIcon color="cyan" variant="light" size="sm">
                                                <IconWand size={14}/>
                                            </ThemeIcon>
                                        </Group>
                                        <Text c="dimmed" size="xs">
                                            {language === 'ru' ? preset.descriptionRu : preset.description}
                                        </Text>
                                        <Button size="xs" variant="light" onClick={() => onLoad(preset.create())}>
                                            {t.load}
                                        </Button>
                                    </Stack>
                                </Paper>
                            ))}
                        </Box>
                    </Paper>
                </Stack>
            </Grid.Col>

            <Grid.Col span={{base: 12, lg: 4}}>
                <Paper className="panel catalog-list-panel" p="md" radius="md">
                    <Group className="responsive-header" justify="space-between" mb="md">
                        <Box className="header-copy">
                            <Title order={3}>{t.examples}</Title>
                            <Text c="dimmed" size="sm">
                                XTLS/Xray-examples: {exampleCatalog.length} JSON/JSONC
                            </Text>
                        </Box>
                        <Group className="responsive-controls">
                            <TextInput
                                leftSection={<IconSearch size={16}/>}
                                placeholder={t.search}
                                value={catalogQuery}
                                onChange={(event) => onQueryChange(event.currentTarget.value)}
                            />
                            <Select
                                leftSection={<IconFilter size={16}/>}
                                data={[
                                    {value: 'all', label: t.all},
                                    {value: 'server', label: 'server'},
                                    {value: 'client', label: 'client'},
                                    {value: 'mixed', label: 'mixed'},
                                    {value: 'other', label: 'other'},
                                ]}
                                value={catalogRole}
                                onChange={(value) => onRoleChange(value ?? 'all')}
                            />
                        </Group>
                    </Group>
                    <ScrollArea h={620}>
                        <Stack gap="xs">
                            {catalog.map((item) => (
                                <Paper
                                    key={item.id}
                                    className="catalog-list-item"
                                    data-active={selected?.id === item.id || undefined}
                                    p="sm"
                                    radius="md"
                                    withBorder
                                    onClick={() => onSelect(item.id)}
                                >
                                    <Group justify="space-between" align="flex-start">
                                        <Box className="header-copy">
                                            <Text fw={700} size="sm">{item.title}</Text>
                                            <Text c="dimmed" size="xs">{item.path}</Text>
                                        </Box>
                                        <Badge size="sm" variant="light">{item.role}</Badge>
                                    </Group>
                                    <Group gap={5} mt="xs">
                                        {[...item.protocols, ...item.transports, ...item.securities, ...item.features].slice(0, 8).map((tag) => (
                                            <Badge key={tag} size="xs" color="cyan" variant="light">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Group>
                                </Paper>
                            ))}
                        </Stack>
                    </ScrollArea>
                </Paper>
            </Grid.Col>

            <Grid.Col span={{base: 12, lg: 5}}>
                <Paper className="panel json-panel" p="md" radius="md">
                    {selected ? (
                        <Stack>
                            <Group className="responsive-header" justify="space-between" align="flex-start">
                                <Box className="header-copy">
                                    <Title order={3}>{selected.title}</Title>
                                    <Text c="dimmed" size="sm">{selected.path}</Text>
                                </Box>
                                <Group gap="xs">
                                    <Badge color="cyan" variant="light">{selected.role}</Badge>
                                    <CopyButton value={selected.raw}>
                                        {({copied, copy}) => (
                                            <Button size="xs" variant="light"
                                                    leftSection={copied ? <IconCircleCheck size={14}/> :
                                                        <IconCopy size={14}/>} onClick={copy}>
                                                {t.copy}
                                            </Button>
                                        )}
                                    </CopyButton>
                                    <Button
                                        size="xs"
                                        leftSection={<IconEye size={14}/>}
                                        disabled={!selected.config}
                                        onClick={() => selected.config && onLoad(selected.config as XrayConfig)}
                                    >
                                        {t.load}
                                    </Button>
                                </Group>
                            </Group>
                            <Group gap={5}>
                                {selected.protocols.map((tag) => <Badge key={tag} variant="light">{tag}</Badge>)}
                                {selected.transports.map((tag) => <Badge key={tag} color="teal"
                                                                         variant="light">{tag}</Badge>)}
                                {selected.securities.map((tag) => <Badge key={tag} color="violet"
                                                                         variant="light">{tag}</Badge>)}
                                {selected.features.map((tag) => <Badge key={tag} color="gray"
                                                                       variant="light">{tag}</Badge>)}
                            </Group>
                            <ScrollArea className="catalog-preview-scroll">
                                <Code block>{selected.raw}</Code>
                            </ScrollArea>
                        </Stack>
                    ) : (
                        <Text c="dimmed">{language === 'ru' ? 'Ничего не найдено.' : 'No examples found.'}</Text>
                    )}
                </Paper>
            </Grid.Col>
        </Grid>
    );
}

function GlobalSections({
                            config,
                            language,
                            query,
                            advancedMode,
                            onChange,
                        }: {
    config: XrayConfig;
    language: Language;
    query: string;
    advancedMode: boolean;
    onChange: (config: XrayConfig) => void;
}) {
    const t = labels[language];
    const sections = Object.keys(sectionFields);

    const updateSection = (section: string, value: RecordValue | undefined) => {
        onChange({...config, [section]: value});
    };

    return (
        <Paper className="panel section-anchor" p="md" radius="md">
            <Title order={3} mb="md">
                {t.global}
            </Title>
            <Accordion multiple variant="separated">
                {sections.map((section) => {
                    const enabled = config[section as keyof XrayConfig] !== undefined;
                    const value = (config[section as keyof XrayConfig] ?? {}) as RecordValue;
                    return (
                        <Accordion.Item key={section} value={section}>
                            <Accordion.Control>
                                <Group justify="space-between" pr="md">
                                    <Text fw={600}>{section}</Text>
                                    <Badge color={enabled ? 'cyan' : 'gray'} variant="light">
                                        {enabled ? 'on' : 'off'}
                                    </Badge>
                                </Group>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Stack>
                                    <Switch
                                        checked={enabled}
                                        label={t.enabled}
                                        onChange={(event) => updateSection(section, event.currentTarget.checked ? defaultSection(section) : undefined)}
                                    />
                                    {enabled && (
                                        <SectionEditor
                                            section={section}
                                            config={config}
                                            language={language}
                                            query={query}
                                            advancedMode={advancedMode}
                                            value={value}
                                            onChange={(next) => updateSection(section, next)}
                                        />
                                    )}
                                </Stack>
                            </Accordion.Panel>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </Paper>
    );
}

function InboundList({
                         config,
                         language,
                         query,
                         advancedMode,
                         onChange,
                     }: {
    config: XrayConfig;
    language: Language;
    query: string;
    advancedMode: boolean;
    onChange: (config: XrayConfig) => void;
}) {
    const t = labels[language];
    const inbounds = config.inbounds ?? [];

    const update = (index: number, inbound: InboundConfig) => {
        onChange({...config, inbounds: inbounds.map((item, itemIndex) => (itemIndex === index ? inbound : item))});
    };

    const remove = (index: number) => {
        onChange({...config, inbounds: inbounds.filter((_, itemIndex) => itemIndex !== index)});
    };

    const add = () => {
        const protocol = inboundProtocols[0];
        onChange({
            ...config,
            inbounds: [
                ...inbounds,
                {
                    tag: `inbound-${inbounds.length + 1}`,
                    listen: '0.0.0.0',
                    port: 443,
                    protocol: protocol.value as InboundConfig['protocol'],
                    settings: protocol.defaultSettings,
                    streamSettings: {network: 'tcp', security: 'none'},
                },
            ],
        });
    };

    return (
        <Paper className="panel section-anchor" p="md" radius="md">
            <Group justify="space-between" mb="md">
                <Title order={3}>{t.inbounds}</Title>
                <Button leftSection={<IconPlus size={16}/>} onClick={add}>
                    {t.addInbound}
                </Button>
            </Group>
            <Stack>
                {inbounds.map((inbound, index) => (
                    <EndpointCard
                        key={`${inbound.tag}-${index}`}
                        endpoint={inbound}
                        index={index}
                        language={language}
                        query={query}
                        advancedMode={advancedMode}
                        mode="inbound"
                        onChange={(next) => update(index, next as InboundConfig)}
                        onRemove={() => remove(index)}
                    />
                ))}
            </Stack>
        </Paper>
    );
}

function OutboundList({
                          config,
                          language,
                          query,
                          advancedMode,
                          onChange,
                      }: {
    config: XrayConfig;
    language: Language;
    query: string;
    advancedMode: boolean;
    onChange: (config: XrayConfig) => void;
}) {
    const t = labels[language];
    const outbounds = config.outbounds ?? [];

    const update = (index: number, outbound: OutboundConfig) => {
        onChange({...config, outbounds: outbounds.map((item, itemIndex) => (itemIndex === index ? outbound : item))});
    };

    const remove = (index: number) => {
        onChange({...config, outbounds: outbounds.filter((_, itemIndex) => itemIndex !== index)});
    };

    const add = () => {
        const protocol = outboundProtocols[0];
        onChange({
            ...config,
            outbounds: [...outbounds, {
                tag: `outbound-${outbounds.length + 1}`,
                protocol: protocol.value as OutboundConfig['protocol'],
                settings: protocol.defaultSettings
            }],
        });
    };

    return (
        <Paper className="panel section-anchor" p="md" radius="md">
            <Group justify="space-between" mb="md">
                <Title order={3}>{t.outbounds}</Title>
                <Button leftSection={<IconPlus size={16}/>} onClick={add}>
                    {t.addOutbound}
                </Button>
            </Group>
            <Stack>
                {outbounds.map((outbound, index) => (
                    <EndpointCard
                        key={`${outbound.tag}-${index}`}
                        endpoint={outbound}
                        index={index}
                        language={language}
                        query={query}
                        advancedMode={advancedMode}
                        mode="outbound"
                        onChange={(next) => update(index, next as OutboundConfig)}
                        onRemove={() => remove(index)}
                    />
                ))}
            </Stack>
        </Paper>
    );
}

function EndpointCard({
                          endpoint,
                          index,
                          language,
                          query,
                          advancedMode,
                          mode,
                          onChange,
                          onRemove,
                      }: {
    endpoint: InboundConfig | OutboundConfig;
    index: number;
    language: Language;
    query: string;
    advancedMode: boolean;
    mode: 'inbound' | 'outbound';
    onChange: (endpoint: InboundConfig | OutboundConfig) => void;
    onRemove: () => void;
}) {
    const t = labels[language];
    const protocols = mode === 'inbound' ? inboundProtocols : outboundProtocols;
    const definition = getProtocol(protocols, endpoint.protocol);
    const supportsStream = mode === 'inbound' || !['freedom', 'blackhole', 'dns', 'loopback'].includes(endpoint.protocol);

    const updateBase = (patch: Partial<InboundConfig & OutboundConfig>) => {
        onChange({...endpoint, ...patch} as InboundConfig | OutboundConfig);
    };

    const changeProtocol = (value: string | null) => {
        if (!value) return;
        const nextDefinition = getProtocol(protocols, value);
        const nextSupportsStream = mode === 'inbound' || !['freedom', 'blackhole', 'dns', 'loopback'].includes(value);
        updateBase({
            protocol: value as never,
            settings: nextDefinition.defaultSettings,
            streamSettings: nextSupportsStream ? (endpoint.streamSettings ?? {
                network: 'tcp',
                security: 'none'
            }) : undefined,
        });
    };

    return (
        <Paper p="md" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Stack>
                <Group justify="space-between">
                    <Group gap="xs">
                        <Title order={4}>
                            {mode} #{index + 1}
                        </Title>
                        <Tooltip label={translate(definition, language, 'help')}>
                            <ActionIcon variant="subtle" color="gray">
                                <IconInfoCircle size={16}/>
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                    <ActionIcon color="red" variant="subtle" onClick={onRemove}>
                        <IconTrash size={18}/>
                    </ActionIcon>
                </Group>

                <Grid>
                    <Grid.Col span={{base: 12, sm: 4}}>
                        <TextInput label={t.tag} value={endpoint.tag}
                                   onChange={(event) => updateBase({tag: event.currentTarget.value})}/>
                    </Grid.Col>
                    {mode === 'inbound' && (
                        <>
                            <Grid.Col span={{base: 12, sm: 4}}>
                                <TextInput label={t.listen} value={(endpoint as InboundConfig).listen ?? ''}
                                           onChange={(event) => updateBase({listen: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, sm: 4}}>
                                <TextInput
                                    label={t.port}
                                    value={String((endpoint as InboundConfig).port ?? '')}
                                    onChange={(event) => updateBase({port: parsePort(event.currentTarget.value)})}
                                />
                            </Grid.Col>
                        </>
                    )}
                    <Grid.Col span={{base: 12, sm: mode === 'inbound' ? 12 : 4}}>
                        <Select
                            label={t.protocol}
                            data={protocols.map((item) => ({value: item.value, label: item.label}))}
                            value={endpoint.protocol}
                            onChange={changeProtocol}
                        />
                    </Grid.Col>
                    {mode === 'outbound' && (
                        <>
                            <Grid.Col span={{base: 12, sm: 4}}>
                                <TextInput
                                    label="Send through"
                                    value={(endpoint as OutboundConfig).sendThrough ?? ''}
                                    onChange={(event) => updateBase({sendThrough: event.currentTarget.value})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, sm: 4}}>
                                <Select
                                    label="Target strategy"
                                    data={['AsIs', 'UseIP', 'UseIPv4', 'UseIPv6', 'ForceIP', 'ForceIPv4', 'ForceIPv6']}
                                    value={(endpoint as OutboundConfig).targetStrategy ?? null}
                                    clearable
                                    onChange={(value) => updateBase({targetStrategy: value ?? undefined})}
                                />
                            </Grid.Col>
                        </>
                    )}
                </Grid>

                <Divider label="Protocol settings"/>
                <ProtocolSettingsEditor
                    definition={definition}
                    endpoint={endpoint}
                    language={language}
                    query={query}
                    advancedMode={advancedMode}
                    onChange={(settings) => updateBase({settings})}
                />

                {mode === 'inbound' && (
                    <>
                        <Divider label="Sniffing"/>
                        <SniffingEditor endpoint={endpoint as InboundConfig} language={language}
                                        onChange={(next) => onChange(next)}/>
                    </>
                )}

                {supportsStream && (
                    <>
                        <Divider label={t.stream}/>
                        <StreamEditor
                            stream={endpoint.streamSettings ?? {network: 'tcp', security: 'none'}}
                            language={language}
                            query={query}
                            advancedMode={advancedMode}
                            onChange={(streamSettings) => updateBase({streamSettings})}
                        />
                    </>
                )}

                {mode === 'outbound' && (
                    <Accordion variant="contained">
                        <Accordion.Item value="advanced">
                            <Accordion.Control>{t.advanced}</Accordion.Control>
                            <Accordion.Panel>
                                <Stack>
                                    <JsonInput
                                        label="proxySettings"
                                        formatOnBlur
                                        value={stringify((endpoint as OutboundConfig).proxySettings ?? {})}
                                        onChange={(value) => updateBase({proxySettings: parseJsonObject(value)})}
                                    />
                                    <JsonInput
                                        label="mux"
                                        formatOnBlur
                                        value={stringify((endpoint as OutboundConfig).mux ?? {})}
                                        onChange={(value) => updateBase({mux: parseJsonObject(value)})}
                                    />
                                </Stack>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                )}
            </Stack>
        </Paper>
    );
}

function StreamEditor({
                          stream,
                          language,
                          query,
                          advancedMode,
                          onChange,
                      }: {
    stream: StreamSettings;
    language: Language;
    query: string;
    advancedMode: boolean;
    onChange: (stream: StreamSettings) => void;
}) {
    const t = labels[language];
    const network = stream.network ?? 'tcp';
    const security = stream.security ?? 'none';
    const streamKey = streamKeyByNetwork[network];
    const settings = (stream[streamKey] ?? {}) as RecordValue;

    const update = (patch: Partial<StreamSettings>) => onChange({...stream, ...patch});
    const setNested = (key: keyof StreamSettings, value: RecordValue) => update({[key]: value});

    return (
        <Stack>
            <Grid>
                <Grid.Col span={{base: 12, sm: 6}}>
                    <Select
                        label="Network"
                        data={Object.keys(transportFields)}
                        value={network}
                        onChange={(value) => {
                            const nextNetwork = (value as TransportProtocol | null) ?? 'tcp';
                            onChange({...stream, network: nextNetwork});
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6}}>
                    <SegmentedControl
                        fullWidth
                        data={[
                            {value: 'none', label: 'None'},
                            {value: 'tls', label: 'TLS'},
                            {value: 'reality', label: 'REALITY'},
                        ]}
                        value={security}
                        onChange={(value) => update({security: value as SecurityProtocol})}
                    />
                </Grid.Col>
            </Grid>

            <FieldGrid
                fields={transportFields[network]}
                language={language}
                query={query}
                advancedMode={advancedMode}
                value={settings}
                onChange={(value) => setNested(streamKey, normalizeTransportSettings(network, value))}
            />

            {security === 'tls' && (
                <>
                    <Divider label={t.security}/>
                    <CertificatesEditor
                        certificates={(Array.isArray(stream.tlsSettings?.certificates) ? stream.tlsSettings?.certificates : []) as RecordValue[]}
                        language={language}
                        onChange={(certificates) => setNested('tlsSettings', {
                            ...((stream.tlsSettings ?? {}) as RecordValue),
                            certificates
                        })}
                    />
                    <FieldGrid
                        fields={tlsFields.filter((field) => field.key !== 'certificates')}
                        language={language}
                        query={query}
                        advancedMode={advancedMode}
                        value={(stream.tlsSettings ?? {}) as RecordValue}
                        onChange={(value) => setNested('tlsSettings', value)}
                    />
                </>
            )}

            {security === 'reality' && (
                <>
                    <Divider label={t.security}/>
                    <FieldGrid
                        fields={realityFields}
                        language={language}
                        query={query}
                        advancedMode={advancedMode}
                        value={(stream.realitySettings ?? {}) as RecordValue}
                        onChange={(value) => setNested('realitySettings', value)}
                    />
                </>
            )}

            <Accordion variant="contained">
                <Accordion.Item value="sockopt">
                    <Accordion.Control>{t.sockopt}</Accordion.Control>
                    <Accordion.Panel>
                        <FieldGrid
                            fields={sockoptFields}
                            language={language}
                            query={query}
                            advancedMode={advancedMode}
                            value={(stream.sockopt ?? {}) as RecordValue}
                            onChange={(value) => setNested('sockopt', value)}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
}

function SniffingEditor({endpoint, language, onChange}: {
    endpoint: InboundConfig;
    language: Language;
    onChange: (endpoint: InboundConfig) => void
}) {
    const sniffing = endpoint.sniffing ?? {};
    const enabled = Boolean(sniffing.enabled);

    const update = (patch: RecordValue) => onChange({...endpoint, sniffing: {...sniffing, ...patch}});

    return (
        <Grid>
            <Grid.Col span={{base: 12, sm: 3}}>
                <Switch checked={enabled} label={labels[language].enabled}
                        onChange={(event) => update({enabled: event.currentTarget.checked})}/>
            </Grid.Col>
            {enabled && (
                <>
                    <Grid.Col span={{base: 12, sm: 5}}>
                        <MultiSelect
                            label="destOverride"
                            data={['http', 'tls', 'quic', 'fakedns']}
                            value={(sniffing.destOverride as string[] | undefined) ?? []}
                            onChange={(value) => update({destOverride: value})}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 2}}>
                        <Switch checked={Boolean(sniffing.metadataOnly)} label="metadataOnly"
                                onChange={(event) => update({metadataOnly: event.currentTarget.checked})}/>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 2}}>
                        <Switch checked={Boolean(sniffing.routeOnly)} label="routeOnly"
                                onChange={(event) => update({routeOnly: event.currentTarget.checked})}/>
                    </Grid.Col>
                </>
            )}
        </Grid>
    );
}

function ClientsEditor({
                           clients,
                           protocol,
                           language,
                           onChange,
                       }: {
    clients: RecordValue[];
    protocol: string;
    language: Language;
    onChange: (clients: RecordValue[]) => void;
}) {
    const t = labels[language];

    const updateClient = (index: number, patch: RecordValue) => {
        onChange(clients.map((client, clientIndex) => (clientIndex === index ? {...client, ...patch} : client)));
    };

    const addClient = () => {
        onChange([...clients, defaultClient(protocol)]);
    };

    return (
        <Paper p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Group justify="space-between" mb="sm">
                <Text fw={600}>Clients</Text>
                <Button size="xs" variant="light" leftSection={<IconPlus size={14}/>} onClick={addClient}>
                    {t.addClient}
                </Button>
            </Group>
            <Stack gap="sm">
                {clients.map((client, index) => (
                    <Paper className="nested-row" key={index} p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
                        <Grid align="end">
                            {clientUsesId(protocol) && (
                                <Grid.Col span={{base: 12, md: 4}}>
                                    <TextInput
                                        label="id"
                                        value={String(client.id ?? '')}
                                        rightSection={
                                            <ActionIcon variant="subtle"
                                                        onClick={() => updateClient(index, {id: crypto.randomUUID()})}>
                                                <IconKey size={16}/>
                                            </ActionIcon>
                                        }
                                        onChange={(event) => updateClient(index, {id: event.currentTarget.value})}
                                    />
                                </Grid.Col>
                            )}
                            {clientUsesPassword(protocol) && (
                                <Grid.Col span={{base: 12, md: 4}}>
                                    <PasswordInput
                                        label={protocol === 'hysteria' ? 'auth' : 'password'}
                                        value={String((protocol === 'hysteria' ? client.auth : client.password) ?? '')}
                                        rightSection={
                                            <ActionIcon variant="subtle"
                                                        onClick={() => updateClient(index, {[protocol === 'hysteria' ? 'auth' : 'password']: randomToken(24)})}>
                                                <IconKey size={16}/>
                                            </ActionIcon>
                                        }
                                        onChange={(event) => updateClient(index, {[protocol === 'hysteria' ? 'auth' : 'password']: event.currentTarget.value})}
                                    />
                                </Grid.Col>
                            )}
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="email" value={String(client.email ?? '')}
                                           onChange={(event) => updateClient(index, {email: event.currentTarget.value})}/>
                            </Grid.Col>
                            {(protocol === 'vless' || protocol === 'trojan') && (
                                <Grid.Col span={{base: 12, md: 3}}>
                                    <Select
                                        clearable
                                        label="flow"
                                        data={['xtls-rprx-vision']}
                                        value={typeof client.flow === 'string' ? client.flow : null}
                                        onChange={(value) => updateClient(index, {flow: value ?? ''})}
                                    />
                                </Grid.Col>
                            )}
                            <Grid.Col span={{base: 12, md: 2}}>
                                <NumberInput label="level" allowDecimal={false}
                                             value={typeof client.level === 'number' ? client.level : undefined}
                                             onChange={(value) => updateClient(index, {level: value === '' ? 0 : Number(value)})}/>
                            </Grid.Col>
                            <Grid.Col className="inline-action-col" span={{base: 12, md: 1}}>
                                <ActionIcon color="red" variant="subtle"
                                            onClick={() => onChange(clients.filter((_, clientIndex) => clientIndex !== index))}>
                                    <IconTrash size={18}/>
                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
}

function DnsServersEditor({servers, language, onChange}: {
    servers: JsonValue[];
    language: Language;
    onChange: (servers: JsonValue[]) => void
}) {
    const t = labels[language];

    const updateServer = (index: number, next: JsonValue) => {
        onChange(servers.map((server, serverIndex) => (serverIndex === index ? next : server)));
    };

    return (
        <Paper p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Group justify="space-between" mb="sm">
                <Text fw={600}>DNS servers</Text>
                <Button size="xs" variant="light" leftSection={<IconPlus size={14}/>}
                        onClick={() => onChange([...servers, '1.1.1.1'])}>
                    {t.addServer}
                </Button>
            </Group>
            <Stack gap="sm">
                {servers.map((server, index) => {
                    const objectMode = typeof server === 'object' && server !== null && !Array.isArray(server);
                    const record = objectMode ? (server as RecordValue) : {};

                    return (
                        <Paper className="nested-row" key={index} p="sm" radius="md" withBorder
                               bg="rgba(255,255,255,0.02)">
                            <Grid align="end">
                                <Grid.Col span={{base: 12, md: 3}}>
                                    <SegmentedControl
                                        fullWidth
                                        data={[
                                            {value: 'simple', label: 'Simple'},
                                            {value: 'object', label: 'Object'},
                                        ]}
                                        value={objectMode ? 'object' : 'simple'}
                                        onChange={(mode) => updateServer(index, mode === 'object' ? {address: String(server || '1.1.1.1')} : String(record.address ?? '1.1.1.1'))}
                                    />
                                </Grid.Col>
                                {objectMode ? (
                                    <>
                                        <Grid.Col span={{base: 12, md: 3}}>
                                            <TextInput label="address" value={String(record.address ?? '')}
                                                       onChange={(event) => updateServer(index, {
                                                           ...record,
                                                           address: event.currentTarget.value
                                                       })}/>
                                        </Grid.Col>
                                        <Grid.Col span={{base: 12, md: 2}}>
                                            <NumberInput
                                                label="port"
                                                allowDecimal={false}
                                                value={typeof record.port === 'number' ? record.port : undefined}
                                                onChange={(value) => {
                                                    const next = {...record};
                                                    if (value === '') {
                                                        delete next.port;
                                                    } else {
                                                        next.port = Number(value);
                                                    }
                                                    updateServer(index, next);
                                                }}
                                            />
                                        </Grid.Col>
                                        <Grid.Col span={{base: 12, md: 4}}>
                                            <TagsInput
                                                label="domains"
                                                value={Array.isArray(record.domains) ? record.domains.map(String) : []}
                                                onChange={(domains) => updateServer(index, {...record, domains})}
                                            />
                                        </Grid.Col>
                                        <Grid.Col span={{base: 12, md: 4}}>
                                            <TagsInput
                                                label="expectIPs"
                                                value={Array.isArray(record.expectIPs) ? record.expectIPs.map(String) : []}
                                                onChange={(expectIPs) => updateServer(index, {...record, expectIPs})}
                                            />
                                        </Grid.Col>
                                        <Grid.Col span={{base: 12, md: 3}}>
                                            <Select
                                                clearable
                                                label="queryStrategy"
                                                data={['UseIP', 'UseIPv4', 'UseIPv6']}
                                                value={typeof record.queryStrategy === 'string' ? record.queryStrategy : null}
                                                onChange={(queryStrategy) => updateServer(index, {
                                                    ...record,
                                                    queryStrategy: queryStrategy ?? ''
                                                })}
                                            />
                                        </Grid.Col>
                                        <Grid.Col span={{base: 12, md: 2}}>
                                            <Switch checked={Boolean(record.skipFallback)} label="skipFallback"
                                                    onChange={(event) => updateServer(index, {
                                                        ...record,
                                                        skipFallback: event.currentTarget.checked
                                                    })}/>
                                        </Grid.Col>
                                    </>
                                ) : (
                                    <Grid.Col span={{base: 12, md: 8}}>
                                        <TextInput label="server" value={String(server ?? '')}
                                                   onChange={(event) => updateServer(index, event.currentTarget.value)}/>
                                    </Grid.Col>
                                )}
                                <Grid.Col className="inline-action-col" span={{base: 12, md: 1}}>
                                    <ActionIcon color="red" variant="subtle"
                                                onClick={() => onChange(servers.filter((_, serverIndex) => serverIndex !== index))}>
                                        <IconTrash size={18}/>
                                    </ActionIcon>
                                </Grid.Col>
                            </Grid>
                        </Paper>
                    );
                })}
            </Stack>
        </Paper>
    );
}

function FallbacksEditor({fallbacks, language, onChange}: {
    fallbacks: RecordValue[];
    language: Language;
    onChange: (fallbacks: RecordValue[]) => void
}) {
    const addLabel = language === 'ru' ? 'Добавить fallback' : 'Add fallback';

    const updateFallback = (index: number, patch: RecordValue) => {
        onChange(fallbacks.map((fallback, fallbackIndex) => (fallbackIndex === index ? {...fallback, ...patch} : fallback)));
    };

    return (
        <Paper p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Group className="responsive-header" justify="space-between" mb="sm">
                <Text fw={600}>Fallbacks</Text>
                <Button size="xs" variant="light" leftSection={<IconPlus size={14}/>}
                        onClick={() => onChange([...fallbacks, {dest: 80}])}>
                    {addLabel}
                </Button>
            </Group>
            <Stack gap="sm">
                {fallbacks.map((fallback, index) => (
                    <Paper className="nested-row" key={index} p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
                        <Grid align="end">
                            <Grid.Col span={{base: 12, md: 2}}>
                                <TextInput label="name" value={String(fallback.name ?? '')}
                                           onChange={(event) => updateFallback(index, {name: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 2}}>
                                <TextInput label="alpn" value={String(fallback.alpn ?? '')}
                                           onChange={(event) => updateFallback(index, {alpn: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="path" value={String(fallback.path ?? '')}
                                           onChange={(event) => updateFallback(index, {path: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 2}}>
                                <Select
                                    clearable
                                    label="type"
                                    data={['', 'http', 'h2', 'grpc', 'xhttp']}
                                    value={typeof fallback.type === 'string' ? fallback.type : null}
                                    onChange={(type) => updateFallback(index, {type: type ?? ''})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 2}}>
                                <TextInput
                                    label="dest"
                                    value={String(fallback.dest ?? '')}
                                    onChange={(event) => updateFallback(index, {dest: parsePort(event.currentTarget.value) ?? event.currentTarget.value})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 1}}>
                                <NumberInput label="xver" allowDecimal={false}
                                             value={typeof fallback.xver === 'number' ? fallback.xver : undefined}
                                             onChange={(value) => updateFallback(index, {xver: value === '' ? 0 : Number(value)})}/>
                            </Grid.Col>
                            <Grid.Col className="inline-action-col" span={{base: 12, md: 1}}>
                                <ActionIcon color="red" variant="subtle"
                                            onClick={() => onChange(fallbacks.filter((_, fallbackIndex) => fallbackIndex !== index))}>
                                    <IconTrash size={18}/>
                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
}

function CertificatesEditor({certificates, language, onChange}: {
    certificates: RecordValue[];
    language: Language;
    onChange: (certificates: RecordValue[]) => void
}) {
    const addLabel = language === 'ru' ? 'Добавить сертификат' : 'Add certificate';

    const updateCertificate = (index: number, patch: RecordValue) => {
        onChange(certificates.map((certificate, certificateIndex) => (certificateIndex === index ? {...certificate, ...patch} : certificate)));
    };

    return (
        <Paper p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Group className="responsive-header" justify="space-between" mb="sm">
                <Text fw={600}>TLS certificates</Text>
                <Button
                    size="xs"
                    variant="light"
                    leftSection={<IconPlus size={14}/>}
                    onClick={() => onChange([...certificates, {
                        certificateFile: '/etc/ssl/fullchain.pem',
                        keyFile: '/etc/ssl/privkey.pem'
                    }])}
                >
                    {addLabel}
                </Button>
            </Group>
            <Stack gap="sm">
                {certificates.map((certificate, index) => (
                    <Paper className="nested-row" key={index} p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
                        <Grid align="end">
                            <Grid.Col span={{base: 12, md: 5}}>
                                <TextInput
                                    label="certificateFile"
                                    value={String(certificate.certificateFile ?? '')}
                                    onChange={(event) => updateCertificate(index, {certificateFile: event.currentTarget.value})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 5}}>
                                <TextInput label="keyFile" value={String(certificate.keyFile ?? '')}
                                           onChange={(event) => updateCertificate(index, {keyFile: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 2}}>
                                <Select
                                    clearable
                                    label="usage"
                                    data={['encipherment', 'verify', 'issue']}
                                    value={typeof certificate.usage === 'string' ? certificate.usage : null}
                                    onChange={(usage) => updateCertificate(index, {usage: usage ?? ''})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 6}}>
                                <Textarea
                                    autosize
                                    minRows={2}
                                    label="certificate"
                                    value={String(certificate.certificate ?? '')}
                                    onChange={(event) => updateCertificate(index, {certificate: event.currentTarget.value})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 5}}>
                                <PasswordInput label="key" value={String(certificate.key ?? '')}
                                               onChange={(event) => updateCertificate(index, {key: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col className="inline-action-col" span={{base: 12, md: 1}}>
                                <ActionIcon color="red" variant="subtle"
                                            onClick={() => onChange(certificates.filter((_, certificateIndex) => certificateIndex !== index))}>
                                    <IconTrash size={18}/>
                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
}

function RoutingRulesEditor({
                                rules,
                                language,
                                outboundTags,
                                inboundTags,
                                onChange,
                            }: {
    rules: RecordValue[];
    language: Language;
    outboundTags: string[];
    inboundTags: string[];
    onChange: (rules: RecordValue[]) => void;
}) {
    const t = labels[language];

    const updateRule = (index: number, patch: RecordValue) => {
        onChange(rules.map((rule, ruleIndex) => (ruleIndex === index ? {...rule, ...patch} : rule)));
    };

    return (
        <Paper p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
            <Group justify="space-between" mb="sm">
                <Text fw={600}>Routing rules</Text>
                <Button size="xs" variant="light" leftSection={<IconPlus size={14}/>}
                        onClick={() => onChange([...rules, {type: 'field', outboundTag: outboundTags[0] ?? 'direct'}])}>
                    {t.addRule}
                </Button>
            </Group>
            <Stack gap="sm">
                {rules.map((rule, index) => (
                    <Paper className="nested-row" key={index} p="sm" radius="md" withBorder bg="rgba(255,255,255,0.02)">
                        <Grid align="end">
                            <Grid.Col span={{base: 12, md: 2}}>
                                <Select label="type" data={['field']} value={String(rule.type ?? 'field')}
                                        onChange={(type) => updateRule(index, {type: type ?? 'field'})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <Select
                                    clearable
                                    label="outboundTag"
                                    data={outboundTags}
                                    value={typeof rule.outboundTag === 'string' ? rule.outboundTag : null}
                                    onChange={(outboundTag) => updateRule(index, {outboundTag: outboundTag ?? ''})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <MultiSelect
                                    searchable
                                    label="inboundTag"
                                    data={inboundTags}
                                    value={Array.isArray(rule.inboundTag) ? rule.inboundTag.map(String) : []}
                                    onChange={(inboundTag) => updateRule(index, {inboundTag})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 4}}>
                                <TagsInput
                                    label="domain"
                                    value={Array.isArray(rule.domain) ? rule.domain.map(String) : []}
                                    onChange={(domain) => updateRule(index, {domain})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 4}}>
                                <TagsInput
                                    label="ip"
                                    value={Array.isArray(rule.ip) ? rule.ip.map(String) : []}
                                    onChange={(ip) => updateRule(index, {ip})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="port" value={String(rule.port ?? '')}
                                           onChange={(event) => updateRule(index, {port: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <MultiSelect
                                    searchable
                                    label="protocol"
                                    data={Array.isArray(rule.protocol) ? rule.protocol.map(String) : ['http', 'tls', 'bittorrent']}
                                    value={Array.isArray(rule.protocol) ? rule.protocol.map(String) : []}
                                    onChange={(protocol) => updateRule(index, {protocol})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <MultiSelect
                                    searchable
                                    label="network"
                                    data={['tcp', 'udp']}
                                    value={Array.isArray(rule.network) ? rule.network.map(String) : typeof rule.network === 'string' ? rule.network.split(',') : []}
                                    onChange={(network) => updateRule(index, {network})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TagsInput
                                    label="sourceIP"
                                    value={Array.isArray(rule.sourceIP) ? rule.sourceIP.map(String) : []}
                                    onChange={(sourceIP) => updateRule(index, {sourceIP})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="sourcePort" value={String(rule.sourcePort ?? '')}
                                           onChange={(event) => updateRule(index, {sourcePort: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TagsInput label="user" value={Array.isArray(rule.user) ? rule.user.map(String) : []}
                                           onChange={(user) => updateRule(index, {user})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TagsInput label="localIP"
                                           value={Array.isArray(rule.localIP) ? rule.localIP.map(String) : []}
                                           onChange={(localIP) => updateRule(index, {localIP})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="localPort" value={String(rule.localPort ?? '')}
                                           onChange={(event) => updateRule(index, {localPort: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TagsInput label="process"
                                           value={Array.isArray(rule.process) ? rule.process.map(String) : []}
                                           onChange={(process) => updateRule(index, {process})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="ruleTag" value={String(rule.ruleTag ?? '')}
                                           onChange={(event) => updateRule(index, {ruleTag: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 3}}>
                                <TextInput label="balancerTag" value={String(rule.balancerTag ?? '')}
                                           onChange={(event) => updateRule(index, {balancerTag: event.currentTarget.value})}/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 6}}>
                                <JsonInput
                                    autosize
                                    formatOnBlur
                                    label="attrs"
                                    minRows={2}
                                    value={rule.attrs === undefined ? '' : stringify(rule.attrs)}
                                    onChange={(value) => updateRule(index, {attrs: parseJsonObject(value) ?? {}})}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 6}}>
                                <JsonInput
                                    autosize
                                    formatOnBlur
                                    label="webhook"
                                    minRows={2}
                                    value={rule.webhook === undefined ? '' : stringify(rule.webhook)}
                                    onChange={(value) => updateRule(index, {webhook: parseJsonObject(value) ?? {}})}
                                />
                            </Grid.Col>
                            <Grid.Col className="inline-action-col" span={{base: 12, md: 1}}>
                                <ActionIcon color="red" variant="subtle"
                                            onClick={() => onChange(rules.filter((_, ruleIndex) => ruleIndex !== index))}>
                                    <IconTrash size={18}/>
                                </ActionIcon>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
}

function SectionEditor({
                           section,
                           config,
                           language,
                           query,
                           advancedMode,
                           value,
                           onChange,
                       }: {
    section: string;
    config: XrayConfig;
    language: Language;
    query: string;
    advancedMode: boolean;
    value: RecordValue;
    onChange: (value: RecordValue) => void;
}) {
    const fields = sectionFields[section].filter((field) => {
        if (section === 'dns' && field.key === 'servers') return false;
        if (section === 'routing' && field.key === 'rules') return false;
        return true;
    });

    return (
        <Stack>
            {section === 'dns' && (
                <DnsServersEditor
                    servers={(Array.isArray(value.servers) ? value.servers : []) as JsonValue[]}
                    language={language}
                    onChange={(servers) => onChange({...value, servers})}
                />
            )}
            {section === 'routing' && (
                <RoutingRulesEditor
                    rules={(Array.isArray(value.rules) ? value.rules : []) as RecordValue[]}
                    language={language}
                    outboundTags={(config.outbounds ?? []).map((outbound) => outbound.tag).filter(Boolean)}
                    inboundTags={(config.inbounds ?? []).map((inbound) => inbound.tag).filter(Boolean)}
                    onChange={(rules) => onChange({...value, rules})}
                />
            )}
            <FieldGrid fields={fields} language={language} query={query} advancedMode={advancedMode} value={value}
                       onChange={onChange}/>
        </Stack>
    );
}

function ProtocolSettingsEditor({
                                    definition,
                                    endpoint,
                                    language,
                                    query,
                                    advancedMode,
                                    onChange,
                                }: {
    definition: ProtocolDefinition;
    endpoint: InboundConfig | OutboundConfig;
    language: Language;
    query: string;
    advancedMode: boolean;
    onChange: (settings: RecordValue) => void;
}) {
    const hasClients = definition.fields.some((field) => field.key === 'clients');
    const hasFallbacks = definition.fields.some((field) => field.key === 'fallbacks');
    const fields = definition.fields.filter((field) => field.key !== 'clients' && field.key !== 'fallbacks');
    const settings = endpoint.settings ?? {};

    return (
        <Stack>
            {hasClients && (
                <ClientsEditor
                    clients={(Array.isArray(settings.clients) ? settings.clients : []) as RecordValue[]}
                    protocol={endpoint.protocol}
                    language={language}
                    onChange={(clients) => onChange({...settings, clients})}
                />
            )}
            {hasFallbacks && (
                <FallbacksEditor
                    fallbacks={(Array.isArray(settings.fallbacks) ? settings.fallbacks : []) as RecordValue[]}
                    language={language}
                    onChange={(fallbacks) => onChange({...settings, fallbacks})}
                />
            )}
            <FieldGrid fields={fields} language={language} query={query} advancedMode={advancedMode}
                       value={settings} onChange={onChange}/>
        </Stack>
    );
}

function FieldGrid({
                       fields,
                       language,
                       query,
                       advancedMode,
                       value,
                       onChange,
                   }: {
    fields: FieldDefinition[];
    language: Language;
    query?: string;
    advancedMode?: boolean;
    value: RecordValue;
    onChange: (value: RecordValue) => void;
}) {
    const visibleFields = fields.filter((field) => {
        if (!advancedMode && isAdvancedField(field.key)) return false;
        if (!query?.trim()) return true;
        const haystack = [field.key, field.label, field.labelRu, field.help, field.helpRu].join(' ').toLowerCase();
        return haystack.includes(query.trim().toLowerCase());
    });

    const update = (key: string, next: JsonValue | undefined) => {
        const copy = {...value};
        if (next === undefined || next === '') {
            delete copy[key];
        } else {
            copy[key] = next;
        }
        onChange(copy);
    };

    return (
        <Grid>
            {visibleFields.map((field) => (
                <Grid.Col key={field.key}
                          span={field.kind === 'json' || field.kind === 'textarea' ? 12 : {base: 12, sm: 6}}>
                    <FieldInput definition={field} language={language} value={value[field.key]}
                                onChange={(next) => update(field.key, next)}/>
                </Grid.Col>
            ))}
        </Grid>
    );
}

function FieldInput({
                        definition,
                        language,
                        value,
                        onChange,
                    }: {
    definition: FieldDefinition;
    language: Language;
    value: JsonValue | undefined;
    onChange: (value: JsonValue | undefined) => void;
}) {
    const label = (
        <Box className="field-label">
            <span>{translate(definition, language, 'label')}</span>
            <Tooltip label={translate(definition, language, 'help')} multiline maw={320}>
                <IconInfoCircle size={14} opacity={0.72}/>
            </Tooltip>
        </Box>
    );

    const rightSection = definition.secret ? (
        <Tooltip label={labels[language].generate}>
            <ActionIcon variant="subtle" onClick={() => onChange(generateSecret(definition.key))}>
                <IconKey size={16}/>
            </ActionIcon>
        </Tooltip>
    ) : undefined;

    if (definition.kind === 'switch') {
        return <Switch checked={Boolean(value)} label={label}
                       onChange={(event) => onChange(event.currentTarget.checked)}/>;
    }

    if (definition.kind === 'select') {
        return <Select clearable label={label} data={definition.options ?? []}
                       value={value == null ? null : String(value)} onChange={(next) => onChange(next ?? undefined)}/>;
    }

    if (definition.kind === 'number') {
        return <NumberInput allowDecimal={false} label={label} value={typeof value === 'number' ? value : undefined}
                            onChange={(next) => onChange(next === '' ? undefined : Number(next))}/>;
    }

    if (definition.kind === 'tags') {
        return (
            <TagsInput
                label={label}
                value={Array.isArray(value) ? value.map(String) : []}
                onChange={(next) => onChange(next)}
            />
        );
    }

    if (definition.kind === 'json') {
        return (
            <JsonInput
                autosize
                formatOnBlur
                label={label}
                minRows={3}
                value={value === undefined ? '' : stringify(value)}
                validationError={labels[language].invalidJson}
                onChange={(next) => onChange(parseJsonValue(next))}
            />
        );
    }

    if (definition.kind === 'textarea') {
        return <Textarea autosize label={label} minRows={3} value={String(value ?? '')}
                         onChange={(event) => onChange(event.currentTarget.value)}/>;
    }

    if (definition.kind === 'password') {
        return <PasswordInput label={label} rightSection={rightSection} value={String(value ?? '')}
                              onChange={(event) => onChange(event.currentTarget.value)}/>;
    }

    return (
        <TextInput
            label={label}
            placeholder={definition.placeholder}
            rightSection={rightSection}
            value={String(value ?? '')}
            onChange={(event) => onChange(event.currentTarget.value)}
        />
    );
}

function defaultSection(section: string): RecordValue {
    switch (section) {
        case 'log':
            return {loglevel: 'warning'};
        case 'dns':
            return {servers: ['1.1.1.1', '8.8.8.8'], queryStrategy: 'UseIP'};
        case 'routing':
            return {domainStrategy: 'AsIs', rules: []};
        case 'policy':
            return {levels: {0: {handshake: 4, connIdle: 300, uplinkOnly: 2, downlinkOnly: 5}}};
        case 'api':
            return {tag: 'api', services: ['HandlerService', 'LoggerService', 'StatsService']};
        case 'metrics':
            return {tag: 'metrics', listen: '127.0.0.1:11111'};
        case 'fakeDns':
            return {ipPool: '198.18.0.0/15', poolSize: 65535};
        case 'observatory':
            return {subjectSelector: ['proxy'], probeURL: 'https://www.gstatic.com/generate_204', probeInterval: '1m'};
        case 'burstObservatory':
            return {
                subjectSelector: ['proxy'],
                pingConfig: {destination: 'https://www.gstatic.com/generate_204', interval: '1m'}
            };
        case 'geodata':
            return {outbound: 'direct', assets: []};
        case 'version':
            return {};
        default:
            return {};
    }
}

function defaultClient(protocol: string): RecordValue {
    switch (protocol) {
        case 'vless':
            return {id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com'};
        case 'vmess':
            return {id: crypto.randomUUID(), alterId: 0, email: 'user@example.com'};
        case 'trojan':
            return {password: randomToken(24), email: 'user@example.com'};
        case 'hysteria':
            return {auth: randomToken(18), email: 'user@example.com'};
        default:
            return {password: randomToken(24), email: 'user@example.com'};
    }
}

function clientUsesId(protocol: string): boolean {
    return protocol === 'vless' || protocol === 'vmess';
}

function clientUsesPassword(protocol: string): boolean {
    return protocol === 'trojan' || protocol === 'hysteria' || protocol === 'shadowsocks';
}

function isAdvancedField(key: string): boolean {
    return [
        'fallbacks',
        'fragment',
        'noises',
        'proxyProtocol',
        'cipherSuites',
        'rejectUnknownSni',
        'minClientVer',
        'maxClientVer',
        'maxTimeDiff',
        'mldsa65Seed',
        'limitFallbackUpload',
        'limitFallbackDownload',
        'customSockopt',
        'happyEyeballs',
        'tcpFastOpen',
        'tcpMptcp',
        'tcpKeepAliveInterval',
        'tcpKeepAliveIdle',
        'tcpCongestion',
        'tcpWindowClamp',
        'tcpMaxSeg',
        'tcpUserTimeout',
        'addressPortStrategy',
        'trustedXForwardedFor',
        'mark',
        'tproxy',
        'xPaddingBytes',
        'xPaddingObfsMode',
        'xPaddingKey',
        'uplinkHTTPMethod',
        'sessionPlacement',
        'xmux',
        'downloadSettings',
        'extra',
        'echServerKeys',
        'echConfigList',
        'echSockopt',
        'masterKeyLog',
        'pinnedPeerCertSha256',
        'verifyPeerCertByName',
        'verifyPeerCertInNames',
    ].includes(key);
}

function filterCatalog(catalog: ExampleCatalogItem[], query: string, role: string): ExampleCatalogItem[] {
    const normalizedQuery = query.trim().toLowerCase();

    return catalog.filter((item) => {
        if (role !== 'all' && item.role !== role) {
            return false;
        }

        if (!normalizedQuery) {
            return true;
        }

        const haystack = [
            item.title,
            item.path,
            item.role,
            ...item.protocols,
            ...item.transports,
            ...item.securities,
            ...item.features,
        ].join(' ').toLowerCase();

        return haystack.includes(normalizedQuery);
    });
}

function normalizeTransportSettings(network: TransportProtocol, value: RecordValue): RecordValue {
    if (network !== 'ws' || !value.host) {
        return value;
    }

    const headers = typeof value.headers === 'object' && value.headers && !Array.isArray(value.headers) ? value.headers : {};
    const {host, ...rest} = value;
    return {...rest, headers: {...headers, Host: host}};
}

function translate(definition: FieldDefinition | ProtocolDefinition, language: Language, key: 'label' | 'help'): string {
    if (key === 'label') {
        return language === 'ru' && 'labelRu' in definition ? definition.labelRu : definition.label;
    }

    return language === 'ru' ? definition.helpRu : definition.help;
}

function stringify(value: unknown): string {
    return JSON.stringify(value, null, 2);
}

function parseJsonValue(value: string): JsonValue | undefined {
    if (!value.trim()) {
        return undefined;
    }

    try {
        return JSON.parse(value) as JsonValue;
    } catch {
        return value;
    }
}

function parseJsonObject(value: string): RecordValue | undefined {
    const parsed = parseJsonValue(value);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as RecordValue) : undefined;
}

function parsePort(value: string): number | string | undefined {
    if (!value.trim()) return undefined;
    const numeric = Number(value);
    return Number.isInteger(numeric) ? numeric : value;
}

function generateSecret(key: string): string {
    if (key.toLowerCase().includes('short')) {
        return randomHex(8);
    }

    if (key.toLowerCase().includes('password')) {
        return randomToken(24);
    }

    return randomBase64Url(32);
}
