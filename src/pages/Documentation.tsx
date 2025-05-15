import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    List,
    Link,
    Table,
    Image,
    Button,
    Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Documentation() {
    return (
        <Container maxW="container.lg" py={6}>
            <VStack align="start" padding={6} gap={8}>
                <Heading as="h1" size="xl">
                    Documentation
                </Heading>

                <Box>
                    <Heading as="h2" size="lg">
                        Table of Contents
                    </Heading>
                    <List.Root>
                        <List.Item>
                            <Link href="#introduction">1. Introduction</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#scenario">2. Scenario</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#datasets">
                                3. Original Dataset and Mashed-up Dataset
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#quality">
                                4. Quality Analysis of the Datasets
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#legal">5. Legal Analysis</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#ethics">6. Ethics Analysis</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#technical">7. Technical Analysis</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#sustainability">
                                8. Sustainability of Dataset Updates
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#visualization">9. Visualization</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="#rdf">
                                10. RDF Assertion of Metadata
                            </Link>
                        </List.Item>
                    </List.Root>
                </Box>

                <Box id="introduction">
                    <Heading as="h2" size="lg">
                        1. Introduction
                    </Heading>
                    <Text mb={4}>
                        In recent years, Italy has experienced a significant
                        increase in immigration, impacting various sectors of
                        society.{" "}
                        <Link href="https://www.repubblica.it/cronaca/2024/02/13/news/immigrati_record_di_assunzioni_nel_2023_piu_stranieri_residenti_regolari_effetto_della_sanatoria_del_2020-422119125">
                            According to a 2024 report by La Repubblica
                        </Link>
                        , the foreign resident population in Italy has grown
                        notably, with a significant rise in the number of
                        regular foreign workers. Additionally,{" "}
                        <Link href="https://finanza.repubblica.it/News/2024/10/15/lavoro_da%C2%A0immigrati_l8_8_percento_del_pil_italiano_punte_in_agricoltura_16_4percento_e_costruzioni_15_1percento_-147/">
                            the number of foreign entrepreneurs has been on the
                            rise
                        </Link>
                        , with 776,000 immigrant entrepreneurs recorded in 2023,
                        accounting for 10.4% of the total.
                    </Text>
                    <Text mb={4}>
                        This demographic shift underscores the importance of
                        understanding migration patterns and their implications.
                        In response, DeMi (Decoding Migration) has been carried
                        out for the exam "Open Access and Digital Ethics" as a
                        part of the{" "}
                        <Link href="https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge">
                            Digital Humanities and Digital Knowledge course
                        </Link>{" "}
                        at the University of Bologna. The two contributors to
                        DeMi are:
                    </Text>
                    <Box as="ul" pl={4} mb={4}>
                        <Box as="li">Ekaterina Krasnova,</Box>
                        <Box as="li">Mohammad Javad Farokhi Darani.</Box>
                    </Box>
                    <Text mb={4}>
                        DeMi aims to study and analyze migration trends and
                        demographics in Italy, focusing on two primary research
                        questions:
                    </Text>
                    <Box as="ul" pl={4} mb={4}>
                        <Box as="li">
                            What are the main countries of origin of immigrants
                            in Italy, and how have these trends evolved over the
                            last five years?
                        </Box>
                        <Box as="li">
                            What are the demographic profiles of immigrants in
                            Italy, including age, gender, and education level?
                        </Box>
                    </Box>
                    <Text mb={4}>
                        The background of this project stems from the increasing
                        significance of migration as local phenomenon,
                        particularly within Italy. Migration impacts various
                        aspects of society, such as labor markets, education,
                        and public policy. The idea behind DeMi is to harness
                        open datasets and digital tools to analyze migration
                        trends, offering insights that enhance understanding of
                        migration dynamics and guide policymaking.
                    </Text>
                    <Text mb={4}>
                        To achieve its objectives, DeMi utilizes a collection of
                        open datasets that have been analyzed from legal,
                        ethical, and technical perspectives. The datasets were
                        processed to create mashed-up data, incorporating RDF
                        models aligned with the{" "}
                        <Link href="https://www.w3.org/TR/vocab-dcat-3/">
                            DCAT-AP
                        </Link>{" "}
                        ontology.
                    </Text>
                    <Text>
                        The results of this project are presented through an
                        interactive and user-friendly website, supported by
                        documentation. Additionally, all scripts and derived
                        datasets are shared on the project's{" "}
                        <Link href="https://github.com/mjavadf/DeMi/tree/main">
                            GitHub repository
                        </Link>{" "}
                        under an open license, ensuring that the research is
                        transparent, repeatable, and accessible to a broad
                        audience.
                    </Text>
                </Box>

                <Box id="scenario">
                    <Heading as="h2" size="lg">
                        2. Scenario
                    </Heading>
                    <Text mb={4}>
                        DeMi seeks to provide valuable insights into the trends
                        and profiles of immigrants in Italy, helping to address
                        knowledge gaps and promote informed decision-making. By
                        examining the main countries of origin of immigrants,
                        along with their demographic profiles, our research aims
                        to highlight patterns that are often underrepresented or
                        misunderstood.
                    </Text>
                    <Text mb={4}>
                        The information provided by DeMi holds immense value for
                        a diverse range of individuals and groups. Researchers
                        can use our findings to deepen their understanding of
                        migration trends, uncovering patterns that inform
                        studies on demographics, education, and labor markets.
                        Policymakers, in turn, can rely on this data to craft
                        targeted strategies for social integration, allocate
                        resources more effectively, and design initiatives that
                        address the needs of immigrant populations. Educators
                        may find the demographic and educational insights
                        particularly useful for shaping curricula and support
                        programs that cater to students from diverse cultural
                        and educational backgrounds. Similarly, community
                        leaders and advocacy groups can leverage the data to
                        develop initiatives like language workshops or
                        mentorship programs, ensuring immigrants have the tools
                        they need to integrate. Journalists and activists can
                        use our research to challenge stereotypes and foster a
                        more nuanced understanding of migration in public
                        discourse.
                    </Text>
                    <Text mb={4}>
                        However, despite its broad utility, the project
                        encountered significant challenges. A notable issue was
                        the lack of recent updates in many datasets, with some
                        containing no new data since 2012. This presented
                        difficulties in ensuring that our analysis was as
                        accurate and comprehensive as possible.
                    </Text>
                    <Text>
                        Through these efforts, DeMi aims to empower a wide range
                        of stakeholders by providing open, accessible, and
                        reliable data. By presenting migration trends and
                        insights in an understandable and meaningful way, our
                        project contributes to a more informed and empathetic
                        discourse on migration, supporting the development of
                        more inclusive societies.
                    </Text>
                </Box>

                <Box id="datasets">
                    <Heading as="h2" size="lg">
                        3. Original Dataset and Mashed-up Dataset
                    </Heading>

                    <Heading as="h3" size="md" mt={4}>
                        3.1. Original Datasets
                    </Heading>
                    <Text mb={4}>
                        Here there is a description for each of original
                        datasets:
                    </Text>

                    <Text fontWeight="bold">IstatData</Text>
                    <Link href="https://esploradati.istat.it/">
                        https://esploradati.istat.it/
                    </Link>
                    <Text mb={4}>
                        IstatData is the new platform to disseminate Istat
                        aggregate data. All data currently available on I.Stat
                        have been moved to IstatData, which allows to browse the
                        same contents improved with charts, maps and thematic
                        data summaries. The platform uses the open source tools
                        "Data Browser" and "Meta & Data Manager" developed by
                        Istat (
                        <Link href="https://sdmxistattoolkit.github.io">
                            https://sdmxistattoolkit.github.io
                        </Link>
                        ) following the international standard SDMX (Statistical
                        Data and Metadata eXchange).
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        List of files:
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Dataset link
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D1</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0">
                                        esloradati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Population on 1st January
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D2</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRBIL1/IT1,29_316_DF_DCIS_POPSTRBIL1_1,1.0">
                                        esloradati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>Balance</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D3</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_ACQCITIZ/IT1,29_849_DF_DCIS_ACQCITIZ_1,1.0">
                                        esloradati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Foreigners who acquired Italian citizenship
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D4</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_2,1.0">
                                        esloradati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Immigrants - citizenship
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D5</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_PERMSOGG1/IT1,29_348_DF_DCIS_PERMSOGG1_1,1.0">
                                        esloradati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Residence permits on 1st January
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text fontWeight="bold">Noi Italia 2024</Text>
                    <Link href="https://noi-italia.istat.it/home.php">
                        https://noi-italia.istat.it/home.php
                    </Link>
                    <Text mb={2}>
                        Overview of official statistics on Italy, organized into
                        6 thematic areas and 19 sectors with summaries, graphs,
                        glossary, and links.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        List of files:
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Dataset link
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D6</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://noi-italia.istat.it/pagina.php?L=0&categoria=4&dove=ITA">
                                        noi-italia.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Education levels and age groups (15–64
                                    years)
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text fontWeight="bold">Immigrants.Stat</Text>
                    <Link href="http://stra-dati.istat.it/Index.aspx">
                        http://stra-dati.istat.it/Index.aspx
                    </Link>
                    <Text mb={2}>
                        Data warehouse of statistics on foreign immigrants and
                        new citizens by Istat.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        List of files:
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Dataset link
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D7</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/Index.aspx?lang=en&SubSessionId=1e10059f-62b5-4107-bb48-38b281ae5de0">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Employment (by education level)
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D8</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/?lang=en&SubSessionId=9168695d-68df-4465-8170-642f0da567c1">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Employment (gender, full/part-time)
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D9</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/?lang=en&SubSessionId=9168695d-68df-4465-8170-642f0da567c1">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Employment: employees by gender
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D10</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/?lang=en&SubSessionId=9168695d-68df-4465-8170-642f0da567c1">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Employment rate (by gender and education)
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D11</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/?lang=en&SubSessionId=9168695d-68df-4465-8170-642f0da567c1">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Unemployment rate (by education)
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D12</Table.Cell>
                                <Table.Cell>
                                    <Link href="http://stra-dati.istat.it/?lang=en&SubSessionId=9168695d-68df-4465-8170-642f0da567c1">
                                        stra-dati.istat.it
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Residence permits (non-EU, by asylum status)
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text fontWeight="bold">OECD</Text>
                    <Link href="https://www.oecd.org/">
                        https://www.oecd.org/
                    </Link>
                    <Text mb={2}>
                        OECD is a policy hub working with over 100 countries to
                        shape better lives through data and analysis.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        List of files:
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Dataset link
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D13</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://data-explorer.oecd.org/vis?...">
                                        data-explorer.oecd.org
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    International migration database, Inflows
                                    (Italy)
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D14</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://data-explorer.oecd.org/vis?...">
                                        data-explorer.oecd.org
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Standardised inflows of temporary migrants
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D15</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://data-explorer.oecd.org/vis?...">
                                        data-explorer.oecd.org
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    Standardised inflows of permanent-type
                                    migrants
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Heading as="h3" size="md" mt={6}>
                        3.2. Mashed-up Dataset
                    </Heading>
                    <Text mb={4}>
                        In order to manage the mash-up of different datasets
                        with different licenses, we followed the{" "}
                        <Link href="https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1561563110433&uri=CELEX:32019L1024">
                            Guidelines for Open Data provided by the EU
                        </Link>
                        . The datasets were then merged and processed into:
                    </Text>

                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>
                                    Primary datasets
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Mashed-up dataset
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D4, D5, D15</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_country_and_permit.csv">
                                        DeMi: Trends by Country and Residence
                                        Permits
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D8, D10, D11</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://github.com/mjavadf/DeMi/blob/main/datasets/mashup/italy_immigration_trends_by_demographic_profiles.csv">
                                        DeMi: Trends by Education Level,
                                        Employment and Unemployment
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text mt={4}>
                        The process of merging is presented through{" "}
                        <Link href="https://jupyter.org/">
                            Jupyter Notebook
                        </Link>{" "}
                        and can be found{" "}
                        <Link href="https://github.com/mjavadf/DeMi/blob/main/DeMi.ipynb">
                            here
                        </Link>
                        .
                    </Text>
                </Box>

                <Box id="quality">
                    <Heading as="h2" size="lg">
                        4. Quality Analysis of the Datasets
                    </Heading>

                    <Text mb={4}>
                        To conduct the quality analysis, we adhered to the{" "}
                        <Link href="https://iso25000.com/index.php/en/iso-25000-standards/iso-25012">
                            ISO/IEC 25012 standard
                        </Link>
                        , which outlines 15 key data quality characteristics, as
                        shown in the picture below.
                    </Text>

                    <Box mb={2}>
                        <Image src="https://private-user-images.githubusercontent.com/145998112/403899802-58a8f18e-d348-499f-9db5-b64ca6c3133f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcwNTM1MjEsIm5iZiI6MTc0NzA1MzIyMSwicGF0aCI6Ii8xNDU5OTgxMTIvNDAzODk5ODAyLTU4YThmMThlLWQzNDgtNDk5Zi05ZGI1LWI2NGNhNmMzMTMzZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxMlQxMjMzNDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YjZkYzhhODUzZTlkOTExODczM2YwNzY1NjNiZDIwMWY0ODc0NTU2OTJhYzk5OTZjNWQ0OTcxZDRiZmFjNzM4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qk_zduVZYGlA1Ywi-U6Y_REOxrbsEcc3MUrRm0SiDSU" />
                        <Text fontSize="sm" color="gray.600">
                            Picture 1
                        </Text>
                    </Box>

                    <Text mb={4}>
                        These characteristics are grouped into two main
                        categories: Inherent Data Quality and System-Dependent
                        Data Quality. For this analysis, we focused exclusively
                        on <em>Inherent Data Quality</em>, as it pertains to the
                        intrinsic properties of the data itself, independent of
                        any specific system or context. This focus allows us to
                        evaluate the dataset's accuracy, completeness,
                        consistency, credibility, and currentness
                        comprehensively.
                    </Text>

                    <Text mb={4}>
                        During the analysis, we observed that several columns
                        contained a significant proportion of missing values. To
                        quantify this issue, we calculated the percentage of
                        completeness for each dataset using a{" "}
                        <Link href="https://github.com/mjavadf/DeMi/blob/main/datasets/completeness.py">
                            specialized algorithm
                        </Link>
                        , created with Python. The detailed results of this
                        evaluation are provided below.
                    </Text>

                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Dataset</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Accuracy
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Completeness
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Consistency
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Credibility
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Currentness
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <strong>D1, D2, D3, D4, D5</strong>
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets seem to contain population
                                    statistics, but without further context...
                                    (trimmed for brevity)
                                </Table.Cell>
                                <Table.Cell>
                                    There are missing values in several
                                    columns... (trimmed)
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets are logically structured...
                                    (trimmed)
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets come from a reliable source...
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets include time periods from 2019
                                    to 2023...
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <strong>D6</strong>
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset contains percentage values...
                                    (trimmed)
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset appears complete for the given
                                    columns...
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset is consistent in structure...
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset appears reliable.
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset includes time periods from 2019
                                    to 2023...
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <strong>D7, D8, D9, D10, D11, D12</strong>
                                </Table.Cell>
                                <Table.Cell>
                                    The data in the Value column appears
                                    reasonable...
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets appear to be complete...
                                    (trimmed)
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets are internally consistent...
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets appear to come from a credible
                                    source.
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets include time periods from 2019
                                    to 2023...
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <strong>D13, D14, D15</strong>
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets provide migration statistics...
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets contain several columns with
                                    missing values...
                                </Table.Cell>
                                <Table.Cell>
                                    The dataset is consistent in structure...
                                    (trimmed)
                                </Table.Cell>
                                <Table.Cell>
                                    Given the dataset is from OECD...
                                </Table.Cell>
                                <Table.Cell>
                                    The datasets include time periods from 2019
                                    to 2023...
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text fontSize="sm" mb={4}>
                        * During the initial analysis of D6, we noticed
                        structural inconsistencies in the CSV file, so a{" "}
                        <Link href="https://github.com/mjavadf/DeMi/blob/main/datasets/formattingCSV.py">
                            preprocessing script
                        </Link>{" "}
                        was used. The{" "}
                        <Link href="https://github.com/mjavadf/DeMi/blob/main/datasets/NoiItalia2024/output_file.csv">
                            formatted file
                        </Link>{" "}
                        was then analyzed.
                    </Text>

                    <Heading as="h4" size="sm" mb={2}>
                        Column Descriptions:
                    </Heading>
                    <Box as="ul" pl={4} mb={6}>
                        <Box as="li">
                            <strong>Completeness</strong>: The extent to which
                            all required data is present. The dataset may have
                            missing values or incomplete fields that affect its
                            usefulness.
                        </Box>
                        <Box as="li">
                            <strong>Accuracy</strong>: The degree to which the
                            data correctly represents the real-world values. In
                            some cases, external validation is required to
                            assess this fully.
                        </Box>
                        <Box as="li">
                            <strong>Coherence</strong>:The extent to which the
                            data is logically coherent and aligns with other
                            related data. Missing or inconsistent data can
                            reduce the overall coherence.
                        </Box>
                        <Box as="li">
                            <strong>Credibility</strong>: The trustworthiness of
                            the source of the data. Ideally, the dataset should
                            come from a recognized and reliable source.
                        </Box>
                        <Box as="li">
                            <strong>Currentness</strong>: The timeliness of the
                            data. A dataset is more valuable when it includes
                            up-to-date information.
                        </Box>
                    </Box>

                    <Heading as="h4" size="sm" mb={2}>
                        Completeness Algorithm Results
                    </Heading>
                    <Text mb={4}>
                        The completeness of each dataset was assessed by
                        identifying null values. Null values were determined
                        using indicators such as NaN, ' ', '', '-', and '.'.
                    </Text>

                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Dataset</Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Total Values
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Null Values
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                    Completeness (%)
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D1</Table.Cell>
                                <Table.Cell>4,276,044</Table.Cell>
                                <Table.Cell>2,028,780</Table.Cell>
                                <Table.Cell>52.55%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D2</Table.Cell>
                                <Table.Cell>639,180</Table.Cell>
                                <Table.Cell>297,780</Table.Cell>
                                <Table.Cell>53.41%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D3</Table.Cell>
                                <Table.Cell>8,568</Table.Cell>
                                <Table.Cell>4,488</Table.Cell>
                                <Table.Cell>47.62%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D4</Table.Cell>
                                <Table.Cell>331,992</Table.Cell>
                                <Table.Cell>172,153</Table.Cell>
                                <Table.Cell>48.15%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D5</Table.Cell>
                                <Table.Cell>90,175</Table.Cell>
                                <Table.Cell>46,839</Table.Cell>
                                <Table.Cell>48.06%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D6</Table.Cell>
                                <Table.Cell>540</Table.Cell>
                                <Table.Cell>0</Table.Cell>
                                <Table.Cell>100.0%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D7</Table.Cell>
                                <Table.Cell>24,024</Table.Cell>
                                <Table.Cell>3,696</Table.Cell>
                                <Table.Cell>84.62%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D8</Table.Cell>
                                <Table.Cell>20,250</Table.Cell>
                                <Table.Cell>2,700</Table.Cell>
                                <Table.Cell>86.67%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D9</Table.Cell>
                                <Table.Cell>22,950</Table.Cell>
                                <Table.Cell>2,700</Table.Cell>
                                <Table.Cell>88.24%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D10</Table.Cell>
                                <Table.Cell>20,400</Table.Cell>
                                <Table.Cell>2,400</Table.Cell>
                                <Table.Cell>88.24%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D11</Table.Cell>
                                <Table.Cell>30,195</Table.Cell>
                                <Table.Cell>4,026</Table.Cell>
                                <Table.Cell>86.67%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D12</Table.Cell>
                                <Table.Cell>361,605</Table.Cell>
                                <Table.Cell>48,214</Table.Cell>
                                <Table.Cell>86.67%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D13</Table.Cell>
                                <Table.Cell>271,950</Table.Cell>
                                <Table.Cell>18,223</Table.Cell>
                                <Table.Cell>93.30%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D14</Table.Cell>
                                <Table.Cell>41,472</Table.Cell>
                                <Table.Cell>3,491</Table.Cell>
                                <Table.Cell>91.58%</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D15</Table.Cell>
                                <Table.Cell>41,184</Table.Cell>
                                <Table.Cell>3,447</Table.Cell>
                                <Table.Cell>91.63%</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Box>

                <Box id="legal">
                    <Heading as="h2" size="lg">
                        5. Legal Analysis
                    </Heading>

                    <Heading as="h3" size="md" mt={4}>
                        Original Datasets
                    </Heading>
                    <Text mb={4}>
                        The original datasets used to cover the different themes
                        of this project are listed in{" "}
                        <Link href="#datasets">Section 3.1.</Link>
                    </Text>

                    <Heading as="h3" size="md" mt={6}>
                        Legal Checklist
                    </Heading>
                    <Text mb={4}>
                        The fields with an asterisk (*) have additional notes
                        explained in the section below.
                    </Text>

                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>
                                    To check
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>D1–D5</Table.ColumnHeader>
                                <Table.ColumnHeader>D6</Table.ColumnHeader>
                                <Table.ColumnHeader>D7–D12</Table.ColumnHeader>
                                <Table.ColumnHeader>D13–D15</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    1.1 Personal data present?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.2 Indirect personal data?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.3 Special categories (Art. 9 GDPR)?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.4 Combinable identification risk?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.6 Risk analysis and anonymization tool
                                    used?
                                </Table.Cell>
                                <Table.Cell>No*</Table.Cell>
                                <Table.Cell>No*</Table.Cell>
                                <Table.Cell>No*</Table.Cell>
                                <Table.Cell>No*</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.8 Platform privacy compliance?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>No*</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.9 Known controller/processor?
                                </Table.Cell>
                                <Table.Cell>Istat</Table.Cell>
                                <Table.Cell>Istat</Table.Cell>
                                <Table.Cell>Istat</Table.Cell>
                                <Table.Cell>OECD</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.10 Storage & jurisdiction?
                                </Table.Cell>
                                <Table.Cell>Italy (no cloud)</Table.Cell>
                                <Table.Cell>Italy (no cloud)</Table.Cell>
                                <Table.Cell>Italy (no cloud)</Table.Cell>
                                <Table.Cell>France (no cloud)</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    1.11 Mixed or non-personal data?
                                </Table.Cell>
                                <Table.Cell>Mixed</Table.Cell>
                                <Table.Cell>Mixed</Table.Cell>
                                <Table.Cell>Mixed</Table.Cell>
                                <Table.Cell>Mixed</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    2.1 Dataset created by you?
                                </Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2.2 Dataset ownership?</Table.Cell>
                                <Table.Cell>No, Istat</Table.Cell>
                                <Table.Cell>No, Istat</Table.Cell>
                                <Table.Cell>No, Istat</Table.Cell>
                                <Table.Cell>No, OECD</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>3.1 Open license used?</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    3.2 No re-identification clause?
                                </Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    4.1 Scope and competence check?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    5.1 Free release confirmed?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    5.2 Partner release agreements?
                                </Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    5.3 Non-liability clause in ToS?
                                </Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Heading as="h4" size="sm" mt={6}>
                        Notes
                    </Heading>
                    <Text mb={2}>
                        <strong>1.6</strong>: We do not use a deanonymization
                        tool as the datasets do not include personal data.
                    </Text>
                    <Text mb={4}>
                        <strong>1.7</strong>: According to the{" "}
                        <Link href="https://www.oecd.org/en/about/privacy.html">
                            OECD Privacy Policy
                        </Link>
                        , data collection occurs via user inputs and cookies,
                        but consent and GDPR compliance are unclear.
                    </Text>

                    <Heading as="h3" size="md" mt={6}>
                        Licenses
                    </Heading>
                    <Text mb={4}>
                        Below is a quick overview of the licensing terms for
                        each dataset used in this project.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        Primary Datasets
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Dataset</Table.ColumnHeader>
                                <Table.ColumnHeader>License</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>D1–D12</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://creativecommons.org/licenses/by/4.0/deed.en">
                                        CC BY 4.0
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>D13–D15</Table.Cell>
                                <Table.Cell>
                                    <Link href="https://www.oecd.org/en/about/terms-conditions.html">
                                        OECD's Terms and Conditions
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text mb={4}>
                        <strong>CC BY 4.0</strong> allows sharing and adapting
                        even for commercial use with attribution and no
                        additional restrictions. Most datasets (D1–D12) fall
                        under this license.
                    </Text>
                    <Text mb={4}>
                        <strong>OECD’s Terms and Conditions</strong> apply to
                        D13–D15 and generally permit non-commercial use with
                        attribution; commercial use may require permission.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        Mashed-up Datasets
                    </Text>
                    <Table.Root mb={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Dataset</Table.ColumnHeader>
                                <Table.ColumnHeader>License</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    DeMi: Trends by Country and Residence
                                    Permits
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                                        CC BY-SA 4.0
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    DeMi: Trends by Education Level, Employment
                                    and Unemployment
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                                        CC BY-SA 4.0
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Text mb={4}>
                        Under <strong>CC BY-SA 4.0</strong>, you can share and
                        adapt the material for any purpose, even commercially.
                        You must credit, and derivative works must be licensed
                        under the same terms.
                    </Text>

                    <Heading as="h3" size="md" mt={6}>
                        Clarification on Licensing for Istat Portals
                    </Heading>
                    <Text mb={4}>
                        While Istat portals do not explicitly show licenses,
                        they are assumed to be covered by{" "}
                        <Link href="https://creativecommons.org/licenses/by/4.0/deed.en">
                            CC BY 4.0
                        </Link>
                        . Most datasets are released after surveys in
                        preliminary form.
                    </Text>

                    <Heading as="h3" size="md" mt={6}>
                        Purpose
                    </Heading>
                    <Text fontWeight="semibold" mb={2}>
                        Primary Datasets
                    </Text>
                    <Box as="ul" pl={4} mb={4}>
                        <Box as="li">
                            <strong>D1</strong> – Official demographic data of
                            foreign residents.
                        </Box>
                        <Box as="li">
                            <strong>D2</strong> – Tracks demographic indicators
                            like migration and population counts.
                        </Box>
                        <Box as="li">
                            <strong>D3</strong> – Citizenship acquisition by age
                            group.
                        </Box>
                        <Box as="li">
                            <strong>D4</strong> – Immigrant statistics by
                            country of origin.
                        </Box>
                        <Box as="li">
                            <strong>D5</strong> – Residence permits by type and
                            citizenship.
                        </Box>
                        <Box as="li">
                            <strong>D6</strong> – Education levels of domestic
                            vs. foreign populations.
                        </Box>
                        <Box as="li">
                            <strong>D7</strong> – Employment stats by education
                            for foreigners.
                        </Box>
                        <Box as="li">
                            <strong>D8</strong> – Employment data by gender and
                            work type.
                        </Box>
                        <Box as="li">
                            <strong>D9</strong> – Gender-based employment at
                            regional level.
                        </Box>
                        <Box as="li">
                            <strong>D10</strong> – Employment rate based on
                            gender and education.
                        </Box>
                        <Box as="li">
                            <strong>D11</strong> – Unemployment rate by
                            education.
                        </Box>
                        <Box as="li">
                            <strong>D12</strong> – Residence permits granted for
                            humanitarian reasons.
                        </Box>
                        <Box as="li">
                            <strong>D13</strong> – Annual inflow of non-Italian
                            residents.
                        </Box>
                        <Box as="li">
                            <strong>D14</strong> – Tracks temporary migration
                            categories.
                        </Box>
                        <Box as="li">
                            <strong>D15</strong> – Inflows of permanent-type
                            migrants.
                        </Box>
                    </Box>

                    <Text fontWeight="semibold" mb={2}>
                        Mashed-up Datasets
                    </Text>
                    <Box as="ul" pl={4}>
                        <Box as="li">
                            <strong>
                                DeMi: Trends by Country and Residence Permits
                            </strong>{" "}
                            – Evolution of foreign residents by gender, origin,
                            and permit type.
                        </Box>
                        <Box as="li">
                            <strong>
                                DeMi: Trends by Education Level, Employment and
                                Unemployment
                            </strong>{" "}
                            – Employment and education trends segmented by
                            gender and work type.
                        </Box>
                    </Box>
                </Box>

                <Box id="ethics">
                    <Heading as="h2" size="lg">
                        6. Ethics Analysis
                    </Heading>

                    <Text mb={4}>
                        The process of ethical analysis of datasets is crucial
                        for maintaining trust and safeguarding the interests of
                        individuals whose data are involved, especially in
                        sensitive areas like ours, demographics and migration.
                    </Text>

                    <Text fontWeight="bold" mb={2}>
                        Istat.Data, Noi Italia 2024, Immigrants.Stat
                    </Text>
                    <Text mb={4}>
                        All institutions of Istat comply with GDPR, highlighting
                        its commitment to processing personal data transparently
                        and responsibly. As the designated data controller,
                        Istat ensures that data usage is strictly tied to public
                        interest tasks and is legally justified. The data
                        collected, including IP addresses and system details,
                        are essential for operational purposes and statistical
                        analysis, with a retention period that does not exceed
                        ninety days to minimize privacy risks. For further
                        details on their data protection policies, you can visit{" "}
                        <Link href="https://www.istat.it/privacy/">
                            Istat's Privacy Page
                        </Link>
                        .
                    </Text>

                    <Text mb={4}>
                        Istat's adherence to the highest quality standards is
                        mandated both at a national and European level. It
                        operates under the fundamental principles of official
                        statistics set by the European Parliament and Council
                        with{" "}
                        <Link href="https://www.eumonitor.eu/9353000/1/j4nvhdlglbmvdzx_j9vvik7m1c3gyxp/vm4nk8maqayk#:~:text=(1)%20Regulation%20(EC),and%20dissemination%20of%20European%20statistics.">
                            Regulation (EC) No. 223/2009
                        </Link>
                        . Moreover, these principles are echoed in the United
                        Nations Economic Commission for Europe's regulations and
                        further supported by the United Nations Statistical
                        Commission. For more on Istat’s work, visit{" "}
                        <Link href="https://www.istat.it/listituto/attivita/">
                            Istat's Activity Page
                        </Link>
                        .
                    </Text>

                    <Text fontWeight="bold" mb={2}>
                        OECD
                    </Text>
                    <Text mb={4}>
                        The OECD maintains personal data protection standards as
                        part of its commitment to safeguarding individual
                        privacy across its operations. Established under the
                        framework of the{" "}
                        <Link href="https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0188">
                            1980 OECD Privacy Guidelines
                        </Link>{" "}
                        and updated in 2013, these standards ensure that data
                        handling within OECD follows principles of transparency,
                        legality, and necessity. The organization processes
                        personal data to support various public interest
                        missions, including managing staff-related benefits,{" "}
                        <Link href="https://www.oecd.org/en/about/careers/data-protection-notice-for-recruitment.html">
                            recruitment
                        </Link>
                        , and facilitating participation in policy-making
                        through surveys like{" "}
                        <Link href="https://www.oecd.org/en/about/programmes/pisa/pisa-data.html">
                            PISA
                        </Link>{" "}
                        and platforms such as{" "}
                        <Link href="https://pilaproject.org/">PILA</Link>.
                    </Text>

                    <Text mb={4}>
                        The{" "}
                        <Link href="https://www.oecd.org/content/dam/oecd/en/about/data-protection/Decision-of-the-SG-on-Personal-Data-Protection.pdf">
                            OECD Data Protection Rules
                        </Link>
                        , established by the Secretary-General’s decision,
                        mandate that all staff must protect personal data
                        through transparent and appropriate measures. These
                        rules apply to any personal data processing conducted by
                        or on behalf of the OECD and are detailed in{" "}
                        <Link href="https://www.oecd.org/content/dam/oecd/en/about/careers/Staff_Rules_and_Regulations_EN.pdf">
                            Annex XII
                        </Link>{" "}
                        of the Staff Rules and Regulations. They require
                        personal data to be processed transparently and for
                        legitimate purposes, ensuring data is adequate,
                        relevant, up-to-date, and retained only as long as
                        necessary. For further information, visit{" "}
                        <Link href="https://www.oecd.org/en/about/data-protection.html">
                            OECD's Personal Data Protection Page
                        </Link>
                        .
                    </Text>
                </Box>

                <Box id="technical">
                    <Heading as="h2" size="lg">
                        7. Technical Analysis
                    </Heading>

                    <Heading as="h3" size="md" mt={4}>
                        Formats, Metadata, Provenance URI
                    </Heading>
                    <Text mb={4}>
                        The following is a resume of our original datasets'
                        formats, metadata, provenance, and URI. Regarding
                        metadata, certain datasets are either devoid of metadata
                        or only contain metadata that can be read by humans.
                        However, using machine-readable metadata is strongly
                        advised by Article 9 Comma 1 of regulation{" "}
                        <Link href="https://eur-lex.europa.eu/eli/dir/2019/1024/oj">
                            EU 2019/1024
                        </Link>
                        .
                    </Text>

                    <Text fontWeight="semibold" mb={1}>
                        D1, D2, D3, D4, D5
                    </Text>
                    <Text>
                        <strong>Format:</strong> Excel, CSV, JSON, SDMX
                    </Text>
                    <Text>
                        <strong>Metadata:</strong> Provided in SDMX format
                        (machine-readable)
                    </Text>
                    <Text>
                        <strong>URIs:</strong>
                    </Text>
                    <Box as="ul" pl={4} mb={2}>
                        <li>
                            <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRRES1/IT1,29_7_DF_DCIS_POPSTRRES1_1,1.0">
                                POPSTRRES1
                            </Link>
                        </li>
                        <li>
                            <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_POPSTRBIL1/IT1,29_316_DF_DCIS_POPSTRBIL1_1,1.0">
                                POPSTRBIL1
                            </Link>
                        </li>
                        <li>
                            <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_ACQCITIZ/IT1,29_849_DF_DCIS_ACQCITIZ_1,1.0">
                                ACQCITIZ
                            </Link>
                        </li>
                        <li>
                            <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_MIGRATIONS/DCIS_MIGRAZIONI/IT1,28_185_DF_DCIS_MIGRAZIONI_2,1.0">
                                MIGRAZIONI
                            </Link>
                        </li>
                        <li>
                            <Link href="https://esploradati.istat.it/databrowser/#/en/dw/categories/IT1,POP,1.0/POP_FOREIGNIM/DCIS_PERMSOGG1/IT1,29_348_DF_DCIS_PERMSOGG1_1,1.0">
                                PERMSOGG1
                            </Link>
                        </li>
                    </Box>
                    <Text>
                        <strong>Provenance:</strong> Same as URIs above
                    </Text>

                    <Text fontWeight="semibold" mt={4} mb={1}>
                        D6
                    </Text>
                    <Text>
                        <strong>Format:</strong> CSV
                    </Text>
                    <Text>
                        <strong>Metadata:</strong> Not machine-readable
                    </Text>
                    <Text>
                        <strong>URI:</strong>{" "}
                        <Link href="https://noi-italia.istat.it/pagina.php?L=0&categoria=4&dove=ITA">
                            Popolazione e società &gt; Stranieri
                        </Link>
                    </Text>
                    <Text>
                        <strong>Provenance:</strong>
                    </Text>
                    <Box as="ul" pl={4} mb={2}>
                        <li>
                            <Link href="https://www.istat.it/it/lavoro-e-retribuzioni">
                                Istat/lavoro
                            </Link>
                        </li>
                        <li>
                            <Link href="https://demo.istat.it/">
                                Istat/demografia
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.istat.it/it/archivio/stranieri">
                                Istat/stranieri
                            </Link>
                        </li>
                        <li>
                            <Link href="http://stra-dati.istat.it/">
                                Istat/immigrati
                            </Link>
                        </li>
                        <li>
                            <Link href="http://dati.istat.it/">
                                Istat/datawarehouse
                            </Link>
                        </li>
                        <li>
                            <Link href="https://ec.europa.eu/eurostat/web/lfs/statistics-illustrated">
                                Eurostat/labour market
                            </Link>
                        </li>
                        <li>
                            <Link href="http://ec.europa.eu/eurostat/statistics-explained/index.php/Migrant_integration_statistics">
                                Eurostat/migrant integration
                            </Link>
                        </li>
                    </Box>

                    <Text fontWeight="semibold" mt={4} mb={1}>
                        D7, D8, D9, D10, D11, D12
                    </Text>
                    <Text>
                        <strong>Format:</strong> CSV, JSON, SDMX
                    </Text>
                    <Text>
                        <strong>Metadata:</strong> Provided in SDMX format with
                        Developer API
                    </Text>
                    <Text>
                        <strong>URI:</strong>{" "}
                        <Link href="http://stra-dati.istat.it/">
                            Statistice Istat
                        </Link>
                    </Text>
                    <Text>
                        <strong>Provenance:</strong>{" "}
                        <Link href="http://stra-dati.istat.it/">
                            Statistiche Istat
                        </Link>
                    </Text>
                    <Text fontSize="sm" color="gray.600" mb={4}>
                        *Note: The ISTAT portal does not offer direct links to
                        the datasets. Access was through the main portal, which
                        hosts pre-2019 data.
                    </Text>

                    <Text fontWeight="semibold" mt={4} mb={1}>
                        D13, D14, D15
                    </Text>
                    <Text>
                        <strong>Format:</strong> CSV, JSON, SDMX
                    </Text>
                    <Text>
                        <strong>Metadata:</strong> Provided in SDMX format with
                        Developer API
                    </Text>
                    <Text>
                        <strong>URIs:</strong>
                    </Text>
                    <Box as="ul" pl={4} mb={2}>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?lc=en&fs%5B0%5D=Topic%2C1%7CSociety%23SOC%23%7CMigration%23SOC_MIG%23&pg=0&fc=Topic&bp=true&snb=6&vw=ov&df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG%40DF_MIG&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=ITA..A.B11....">
                                International migration database
                            </Link>
                        </li>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?lc=en&fs%5B0%5D=Topic%2C1%7CSociety%23SOC%23%7CMigration%23SOC_MIG%23&pg=0&fc=Topic&bp=true&snb=6&df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG_INT%40DF_MIG_INT_TEMP&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=.A...">
                                Temporary migrants
                            </Link>
                        </li>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG_INT%40DF_MIG_INT_PER&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=.A...">
                                Permanent-type migrants
                            </Link>
                        </li>
                    </Box>
                    <Text>
                        <strong>Provenance:</strong>
                    </Text>
                    <Box as="ul" pl={4}>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?lc=en&fs%5B0%5D=Topic%2C1%7CSociety%23SOC%23%7CMigration%23SOC_MIG%23&pg=0&fc=Topic&bp=true&snb=6&vw=ov&df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG%40DF_MIG&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=ITA..A.B11....">
                                International migration database
                            </Link>
                        </li>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?lc=en&fs%5B0%5D=Topic%2C1%7CSociety%23SOC%23%7CMigration%23SOC_MIG%23&pg=0&fc=Topic&bp=true&snb=6&df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG_INT%40DF_MIG_INT_TEMP&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=.A...">
                                Temporary migrants
                            </Link>
                        </li>
                        <li>
                            <Link href="https://data-explorer.oecd.org/vis?df%5Bds%5D=dsDisseminateFinalDMZ&df%5Bid%5D=DSD_MIG_INT%40DF_MIG_INT_PER&df%5Bag%5D=OECD.ELS.IMD&df%5Bvs%5D=1.0&dq=.A...">
                                Permanent-type migrants
                            </Link>
                        </li>
                    </Box>
                </Box>

                <Box id="sustainability">
                    <Heading as="h2" size="lg">
                        8. Sustainability of the Update the Datasets Over Time
                    </Heading>

                    <Text mb={4}>
                        This catalogue was created as part of the{" "}
                        <Link href="https://www.unibo.it/">
                            Open Access and Digital Ethics
                        </Link>{" "}
                        course at the University of Bologna and is not actively
                        maintained by our team; however, the underlying datasets
                        — focused on migration in Italy and sourced from ISTAT
                        and OECD — are regularly updated by their respective
                        institutions.
                    </Text>

                    <Text mb={4}>
                        Our automated scripts, which remain available and
                        licensed under{" "}
                        <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                            CC BY-SA 4.0
                        </Link>
                        , can be rerun on new files whenever a dataset is
                        updated.
                    </Text>

                    <Text mb={4}>
                        Sustainability is a collective responsibility. We
                        encourage anyone who notices an updated input file to
                        notify us so we can use our automated process to update
                        the catalogue accordingly.
                    </Text>

                    <Text>
                        Contributions and updated files submitted via our{" "}
                        <Link href="https://github.com/mjavadf/DeMi/tree/main">
                            GitHub project
                        </Link>{" "}
                        will be reviewed and added if they meet our standards,
                        ensuring that the catalogue remains a relevant and
                        evolving resource.
                    </Text>
                </Box>

                <Box id="visualization">
                    <Heading as="h2" size="lg">
                        9. Visualization
                    </Heading>

                    <Text mb={4}>
                        The visualization component of DeMi combines{" "}
                        <em>geographical</em> and <em>demographic</em> analyses
                        to provide a comprehensive understanding of migration
                        trends in Italy. It was developed using{" "}
                        <strong>React</strong> and <strong>Chakra UI</strong>{" "}
                        for front-end design, <strong>amCharts</strong> for
                        dynamic chart rendering, <strong>TanStack Query</strong>{" "}
                        for efficient data fetching, and{" "}
                        <strong>PapaParse</strong> for CSV data processing.
                        Below are the key visualizations generated:
                    </Text>

                    <Heading as="h3" size="md" mt={4}>
                        Geographical Analysis
                    </Heading>
                    <Text fontWeight="semibold" mb={2}>
                        1. Interactive Geographic Map with Filtered Dataset
                    </Text>
                    <Text mb={2}>
                        A choropleth map displaying immigration trends to Italy,
                        filtered by year (2019–2023), gender
                        (Total/Male/Female), and permit type. Users can:
                    </Text>
                    <List.Root gap={2} mb={4}>
                        <List.Item>
                            • Select a year (2019–2023) to update the map and
                            dataset
                        </List.Item>
                        <List.Item>
                            • Filter by gender to analyze sex-specific migration
                            patterns (e.g., female immigrants from Russia: 2,275
                            in 2019)
                        </List.Item>
                        <List.Item>
                            • Search for countries to highlight specific regions
                            (e.g., "Russia" or "Ukraine")
                        </List.Item>
                        <List.Item>
                            • Hover over countries to view aggregated values,
                            such as total immigrants or permit types
                        </List.Item>
                    </List.Root>

                    <Text fontWeight="semibold" mb={2}>
                        Dataset table:
                    </Text>
                    <Text mb={4}>
                        A dynamic table below the map lists granular data
                        including year, country codes, gender breakdown, permit
                        types, and source dataset identifiers.
                    </Text>

                    <Heading as="h4" size="sm" mb={2}>
                        Insights:
                    </Heading>
                    <List.Root gap={2} mb={6}>
                        <List.Item>
                            • Albania, Romania and Morocco dominate immigration
                            flows, with Bangladesh emerging as a notable
                            contributor in 2021
                        </List.Item>
                        <List.Item>
                            • Female immigrants outnumber males in every year
                        </List.Item>
                    </List.Root>

                    <Text fontWeight="semibold" mb={2}>
                        2. Immigration Trends by Country of Origin (Top 5
                        Countries)
                    </Text>
                    <Text mb={4}>
                        A time-series bar chart illustrating the top five
                        countries of origin from 2019 to 2024. Users can toggle
                        between years and hover to view exact figures (e.g.,
                        Ukraine: 33,897 in 2023).
                    </Text>

                    <Heading as="h4" size="sm" mb={2}>
                        Insights:
                    </Heading>
                    <List.Root gap={2} mb={6}>
                        <List.Item>
                            • Romania and Albania consistently rank as top
                            sources
                        </List.Item>
                        <List.Item>
                            • Ukraine shows significant surge post-2022 due to
                            geopolitical events
                        </List.Item>
                        <List.Item>
                            • Bangladesh and Morocco exhibit steady growth
                        </List.Item>
                    </List.Root>

                    <Text fontWeight="semibold" mb={2}>
                        3. Residence Permits by Type (Short-term vs. Long-term)
                    </Text>
                    <Text mb={4}>
                        A stacked area chart comparing permit categories with
                        dynamic filters for specific permit types or time
                        ranges.
                    </Text>

                    <Heading as="h4" size="sm" mb={2}>
                        Insights:
                    </Heading>
                    <List.Root gap={2} mb={6}>
                        <List.Item>
                            • Long-term permits dominate, peaking at 2.1 million
                            in 2023
                        </List.Item>
                        <List.Item>
                            • Short-term permits fluctuate but remain secondary
                        </List.Item>
                    </List.Root>

                    <Heading as="h3" size="md" mt={4}>
                        Demographic Analysis
                    </Heading>
                    <Text fontWeight="semibold" mb={2}>
                        1. Italy Employment & Unemployment Rate (%) - Total
                        Population
                    </Text>
                    <Text mb={4}>
                        A line chart tracking labor market trends with
                        unemployment peaking at 14.5% in 2021 (COVID-19 impact)
                        but dropping to 11% by 2023.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        2. Work Type Distribution Over Time (2020–2023)
                    </Text>
                    <Text mb={4}>
                        Full-time employment rose from 1.6 million (2020) to 1.8
                        million (2023), reflecting post-pandemic recovery.
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        3. Employment vs. Unemployment by Territory (2023)
                    </Text>
                    <Text mb={2}>
                        A horizontal bar chart showing regional disparities:
                    </Text>
                    <List.Root gap={2} mb={4}>
                        <List.Item>
                            • Nord-ovest: 64% employed, 9% unemployed
                        </List.Item>
                        <List.Item>
                            • Nord-est: 65% employed, 9% unemployed
                        </List.Item>
                        <List.Item>
                            • Mezzogiorno: 50% employed, 19% unemployed
                        </List.Item>
                    </List.Root>

                    <Stack gap={4} direction={{ base: "column", md: "row" }}>
                        <Button variant="outline" asChild>
                            <RouterLink to="/demi-front/visualizations/geographical">
                                Geographical Visualizations
                            </RouterLink>
                        </Button>
                        <Button variant="outline" asChild>
                            <RouterLink to="/demi-front/visualizations/demographical">
                                Demographical Visualizations
                            </RouterLink>
                        </Button>
                    </Stack>
                </Box>

                <Box id="rdf">
                    <Heading as="h2" size="lg">
                        10. RDF Assertion of Metadata
                    </Heading>

                    <Text mb={4}>
                        You can find the file with encoding of all primary and
                        mashed-up datasets{" "}
                        <Link href="https://github.com/mjavadf/DeMi/blob/main/rdf.xml">
                            here
                        </Link>
                        . For encoding metadata, we followed{" "}
                        <Link href="https://www.w3.org/TR/vocab-dcat-2/">
                            Data Catalog Vocabulary (DCAT) - Version 2
                        </Link>
                        . For validation, we used the{" "}
                        <Link href="https://www.w3.org/RDF/Validator/">
                            W3C RDF Validator
                        </Link>
                        .
                    </Text>

                    <Text fontWeight="semibold" mb={2}>
                        Notes
                    </Text>
                    <Text mb={2}>
                        While the{" "}
                        <Link href="http://publications.europa.eu/resource/authority/corporate-body">
                            EU Publications Office
                        </Link>{" "}
                        maintains a registry of corporate bodies, ISTAT is not
                        included in this registry. To address this, the{" "}
                        <code>dct:publisher</code> property for ISTAT datasets
                        directly references{" "}
                        <Link href="https://www.istat.it/en/">
                            ISTAT's official website
                        </Link>
                        .
                    </Text>
                    <Text>
                        In contrast, datasets sourced from OECD use the EU
                        corporate-body URI (
                        <Link href="http://publications.europa.eu/resource/authority/corporate-body/OECD">
                            OECD
                        </Link>
                        ), as OECD is officially listed in the EU registry.
                    </Text>
                </Box>

                <Box id="conclusions">
                    <Heading as="h2" size="lg">
                        11. Conclusions
                    </Heading>
                    <Text mb={4}>
                        The DeMi project systematically examines Italian
                        migration patterns using publicly available datasets,
                        addressing both technical hurdles (e.g., legacy data
                        formats and metadata standardization) and ethical issues
                        (e.g., privacy under GDPR). Its analysis reveals notable
                        trends: by 2023–24 Ukraine became{" "}
                        <Link href="https://schengenvisainfo.com/news/italy-issued-over-330000-residence-permits-to-foreigners-in-2023/">
                            the largest foreign-born community in Italy
                        </Link>
                        , overtaking traditional origin countries amid ongoing
                        external crises.
                    </Text>
                    <Text mb={4}>
                        The vast majority of immigrants hold long-term residence
                        permits –{" "}
                        <Link href="https://www.pragueprocess.eu/en/countries/866-italy?tmpl=component&ml=1#:~:text=At%20the%20end%20of%202020%2C,compared%20to">
                            on the order of two-thirds of all permits
                        </Link>{" "}
                        – indicating deep roots and underscoring the need for
                        long-term integration strategies. The study also
                        documents persistent labor-market disparities: even
                        highly{" "}
                        <Link href="https://unbiasthenews.org/blocked-at-every-turn-why-migrants-in-italy-face-one-of-europes-worse-brain-waste-gaps/#:~:text=Educated%20migrants%20in%20Italy%20may,of%20the%20highest%20in%20Europe">
                            educated migrants face unemployment rates far above
                            those of comparably educated natives
                        </Link>
                        , a gap particularly acute in economically weaker
                        regions (e.g., Southern Italy).
                    </Text>
                    <Text mb={4}>
                        In terms of impact, DeMi's outputs aid policymakers
                        through timely statistics, serve as reusable
                        RDF-formatted datasets for researchers, and engage the
                        public via interactive visualizations. The work overcame
                        challenges like outdated source data and laborious
                        cleaning to meet European metadata standards (DCAT-AP
                        compliant RDF), ensuring transparency through open
                        licensing (CC BY-SA 4.0).
                    </Text>
                    <Text>
                        Future efforts will expand the platform by incorporating
                        additional sources (such as Eurostat), developing
                        predictive modeling of migration flows, and enhancing
                        multilingual user interfaces.
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
}

export default Documentation;
