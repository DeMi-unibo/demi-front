import { 
  VStack, 
  Text, 
  Container,
  Box,
  Link,
  Circle,
  Float
} from '@chakra-ui/react';
import { Blockquote } from '../components/ui/blockquote'
function HomePage() {
  return (
    <Container maxW="container.lg">
      <VStack gap={6} alignItems="start">
        <Box>
          <Text mb={4}>
            In recent years, Italy has experienced a significant increase in immigration, impacting various sectors of society. <Link href="https://www.repubblica.it/cronaca/2024/02/13/news/immigrati_record_di_assunzioni_nel_2023_piu_stranieri_residenti_regolari_effetto_della_sanatoria_del_2020-422119125" color="teal.500" target="_blank" rel="noopener noreferrer">According to a 2024 report by La Repubblica</Link>, the foreign resident population in Italy has grown notably, with a significant rise in the number of regular foreign workers. Additionally, <Link href="https://finanza.repubblica.it/News/2024/10/15/lavoro_da%C2%A0immigrati_l8_8_percento_del_pil_italiano_punte_in_agricoltura_16_4percento_e_costruzioni_15_1percento_-147/" color="teal.500" target="_blank" rel="noopener noreferrer">the number of foreign entrepreneurs has been on the rise</Link>, with 776,000 immigrant entrepreneurs recorded in 2023, accounting for 10.4% of the total.
          </Text>
        </Box>

        <Box>
          <Text mb={4}>
            This demographic shift underscores the importance of understanding migration patterns and their implications. In response, <Text as="span" fontWeight="bold">DeMi</Text> (Decoding Migration) has been carried out for the exam ?Open Access and Digital Ethics? as a part of the <Link href="https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge" color="teal.500" target="_blank" rel="noopener noreferrer">Digital Humanities and Digital Knowledge course</Link> at the University of Bologna.
          </Text>
        </Box>

        <Box>
          <Text mb={4}>
            DeMi aims to study and analyze migration trends and demographics in Italy, focusing on two primary research questions:
          </Text>
          <Blockquote
            colorPalette="blue"
            ps="8"
            icon={
              <Float placement="middle-start">
                <Circle bg="blue.600" size="8" color="white">
                  <Text fontSize="lg" fontWeight="bold">?</Text>
                </Circle>
              </Float>
            }
          >
            <Text mb={2}>
              - What are the main countries of origin of immigrants in Italy, and how have these trends evolved over the last five years??
            </Text>
            <Text mb={2}>
              - What are the demographic profiles of immigrants in Italy, including age, gender, and education level??
            </Text>
          </Blockquote>
        </Box>

        <Box>
          <Text mb={4}>
            The background of this project stems from the increasing significance of migration as local phenomenon, particularly within Italy. Migration impacts various aspects of society, such as labor markets, education, and public policy. The idea behind DeMi is to harness open datasets and digital tools to analyze migration trends, offering insights that enhance understanding of migration dynamics and guide policymaking.
          </Text>
        </Box>

        <Box>
          <Text mb={4}>
            To achieve its objectives, DeMi utilizes a collection of open datasets that have been analyzed from legal, ethical, and technical perspectives. The datasets were processed to create mashed-up data, incorporating RDF models aligned with the <Link href="https://www.w3.org/TR/vocab-dcat-3/" color="teal.500" target="_blank" rel="noopener noreferrer">DCAT-AP</Link> ontology.
          </Text>
        </Box>

        <Box>
          <Text>
            The results of this project are presented through an interactive and user-friendly website, supported by documentation. Additionally, all scripts and derived datasets are shared on the project's GitHub repository under an open license, ensuring that the research is transparent, repeatable, and accessible to a broad audience.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

export default HomePage;