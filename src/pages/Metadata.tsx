import { color } from "@amcharts/amcharts5";
import {
    Box,
    Container,
    Heading,
    Link,
    List,
    Stack,
    Text,
    VStack,
    Button,
    Table,
    Badge,
} from "@chakra-ui/react";

function Metadata() {
    return (
        <Container
            maxW="container.lg"
            py={6}
            style={{
                scrollBehavior: "smooth",
            }}
        >
            <VStack padding={8} align="start">
                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Metadata
                    </Heading>
                    <Text>
                        Metadata is available as{" "}
                        <Link
                            href="https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/rdf.xml?token=GHSAT0AAAAAAC4YXC3RCGBHXKWNVGQVCHBUZ5EUYFA"
                            color="teal.500"
                        >
                            .rdf file
                        </Link>{" "}
                        formed by following the standard{" "}
                        <Link
                            href="https://www.w3.org/TR/vocab-dcat-2/"
                            color="teal.500"
                        >
                            DCAT-AP 2.0
                        </Link>
                        . The files have been retrieved from:
                    </Text>
                    <List.Root padding={1} mt={2}>
                        <List.Item>
                            <Link
                                href="https://esploradati.istat.it/databrowser/#/en"
                                color="teal.500"
                            >
                                Italian National Institute of Statistics (ISTAT)
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link
                                href="https://noi-italia.istat.it/home.php"
                                color="teal.500"
                            >
                                Noi Italia 2024
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link
                                href="http://stra-dati.istat.it/Index.aspx?lang=en"
                                color="teal.500"
                            >
                                Immigrants.Stat
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link href="https://www.oecd.org/" color="teal.500">
                                OECD
                            </Link>
                        </List.Item>
                    </List.Root>
                </Box>

                <Stack direction={{ base: "column", md: "row" }} py={4}>
                    <Button asChild colorPalette={"teal"}>
                        <a href="#dataset1">Mashed-up 1</a>
                    </Button>
                    <Button asChild colorPalette={"teal"}>
                        <a href="#dataset2">Mashed-up 2</a>
                    </Button>
                </Stack>

                <Box id="dataset1" w="full" marginTop={6}>
                    <Heading size="md" mb={3}>
                        <Badge size={'lg'} colorPalette={"teal"} variant={'surface'}>Mashed-up dataset 1</Badge>{" "}
                        <Link
                            href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_country_and_permit.csv"
                            color="teal.500"
                        >
                            DeMi: Trends by Country and Residence Permits
                        </Link>
                    </Heading>
                    <MetadataTable data={dataset1} />
                </Box>

                <Box id="dataset2" w="full" marginTop={6}>
                    <Heading size="md" mb={3}>
                        <Badge size={'lg'} colorPalette={"teal"} variant={'surface'}>Mashed-up dataset 2</Badge>{" "}
                        <Link
                            href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_demographic_profiles.csv"
                            color="teal.500"
                        >
                            DeMi: Trends by Education Level, Employment and
                            Unemployment
                        </Link>
                    </Heading>
                    <MetadataTable data={dataset2} />
                </Box>
            </VStack>
        </Container>
    );
}

function MetadataTable({
    data,
}: {
    data: Record<string, string | JSX.Element>;
}) {
    return (
        <Table.Root size="sm" mt={2}>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Property</Table.ColumnHeader>
                    <Table.ColumnHeader>Value</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Object.entries(data).map(([key, value]) => (
                    <Table.Row key={key}>
                        <Table.Cell fontWeight="bold" whiteSpace="nowrap">
                            {key}
                        </Table.Cell>
                        <Table.Cell>{value}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
}

const dataset1 = {
    Title: "DeMi: Trends by Country and Residence Permits",
    Description:
        "Examines the evolution of foreign residents, focusing on gender, country of origin, temporary and permanent migration categories. Derived from D4, D5, D15.",
    URI: (
        <Link
            href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_country_and_permit"
            color="teal.500"
        >
            URI
        </Link>
    ),
    Distribution: "CSV",
    Encoding: "UTF-8",
    "Accrual periodicity": "Annual",
    "Spatial coverage": (
        <Link href="http://sws.geonames.org/3175395/" color="teal.500">
            Italy (Geonames: 3175395)
        </Link>
    ),
    Theme: (
        <Link href="http://eurovoc.europa.eu/100210" color="teal.500">
            Migration (EuroVoc)
        </Link>
    ),
    License: (
        <Link
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            color="teal.500"
        >
            CC BY-SA 4.0
        </Link>
    ),
    Language: "English",
    Keywords:
        "residence permits, country of origin, migration flows, foreigners",
    Creator: "Ekaterina Krasnova, Mohammad Javad Farokhi Darani",
    Publisher: (
        <Link href="https://github.com/mjavadf/DeMi" color="teal.500">
            University of Bologna - DeMi Project
        </Link>
    ),
    Modified: "2025-02-03",
    Issued: "2025-02-03",
    "Date format": "ISO 8601",
    "Access URL": (
        <Link
            href="https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit.csv"
            color="teal.500"
        >
            CSV file
        </Link>
    ),
};

const dataset2 = {
    Title: "DeMi: Trends by Education Level, Employment and Unemployment",
    Description:
        "Explores employment and education trends among immigrants, focusing on gender, education level, employment/unemployment percentages, and work type. Derived from D8, D10, D11.",
    URI: (
        <Link
            href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_demographic_profiles"
            color="teal.500"
        >
            URI
        </Link>
    ),
    Distribution: "CSV",
    Encoding: "UTF-8",
    "Accrual periodicity": "Annual",
    "Spatial coverage": (
        <Link href="http://sws.geonames.org/3175395/" color="teal.500">
            Italy (Geonames: 3175395)
        </Link>
    ),
    Theme: (
        <Link href="http://eurovoc.europa.eu/100217" color="teal.500">
            Education and Employment (EuroVoc)
        </Link>
    ),
    License: (
        <Link
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            color="teal.500"
        >
            CC BY-SA 4.0
        </Link>
    ),
    Language: "English",
    Keywords: "education, unemployment, employment, foreigners",
    Creator: "Ekaterina Krasnova, Mohammad Javad Farokhi Darani",
    Publisher: (
        <Link href="https://github.com/mjavadf/DeMi" color="teal.500">
            University of Bologna - DeMi Project
        </Link>
    ),
    Modified: "2025-02-03",
    Issued: "2025-02-03",
    "Date format": "ISO 8601",
    "Access URL": (
        <Link
            href="https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_demographic_profiles.csv"
            color="teal.500"
        >
            CSV file
        </Link>
    ),
};

export default Metadata;
