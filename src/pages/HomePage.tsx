import { Box, Container, Heading, Text, Image, Link, VStack } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Container maxW="container.xl" py={8}>
        {/* Image Placeholder */}
        <Box mb={8} overflow="hidden" borderRadius="md">
          <Image 
            src="https://raw.githubusercontent.com/DeMi-unibo/demi-front/refs/heads/main/public/visa-photo.jpg" 
            alt="Immigration visualization"
            w="full"
            maxH="400px"
            objectFit="cover"
          />
        </Box>

        {/* Main Content */}
        <VStack padding={6} align="start">
          <Heading as="h1" size="2xl">DeMi</Heading>
          
          <Heading as="h2" size="lg">Decoding Migration</Heading>
          
          <Text>
            In recent years, Italy has experienced a significant increase in immigration, impacting various sectors of society. <Link color="blue.500" href="https://www.repubblica.it/cronaca/2024/02/13/news/immigrati_record_di_assunzioni_nel_2023_piu_stranieri_residenti_regolari_effetto_della_sanatoria_del_2020-422119125"  >According to a 2024 report by La Repubblica</Link>, the foreign resident population in Italy has grown notably, with a significant rise in the number of regular foreign workers. Additionally, <Link color="blue.500" href="https://finanza.repubblica.it/News/2024/10/15/lavoro_da%C2%A0immigrati_l8_8_percento_del_pil_italiano_punte_in_agricoltura_16_4percento_e_costruzioni_15_1percento_-147/"  >the number of foreign entrepreneurs has been on the rise</Link>, with 776,000 immigrant entrepreneurs recorded in 2023, accounting for 10.4% of the total.
          </Text>
          
          <Text>
            DeMi is a data-driven project that explores recent immigration trends in italy. We focus on two main questions:
          </Text>
          
          <VStack padding={2} align="start" pl={4}>
            <Text>- Where do immigrants in italy come from, and how have these trends changed in the past five years?</Text>
            <Text>- What are their demographic profiles in terms of age, gender, and education?</Text>
          </VStack>
          
          <Text>
            Using open datasets and digital tools, we analyzed migration from legal, ethical, and technical perspectives. The result is an interactive, accessible platform aimed at fostering understanding and encouraging informed discussion.
          </Text>
          
          <Text>
            You can read more in the <Link color="blue.500" href="https://demi-unibo.github.io/demi-front/documentation">Documentation</Link>, and explore our Visualizations(<Link color="blue.500" href="https://demi-unibo.github.io/demi-front/visualizations/geographical">Geographical</Link> or <Link color="blue.500" href="https://demi-unibo.github.io/demi-front/visualizations/demographical">Demographical</Link>) for insights. Our analysis resulted in the creation of our own two datasets, that you can discover on the page of <Link color="blue.500" href="https://demi-unibo.github.io/demi-front/metadata">Metadata</Link>.
          </Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.100" py={4} mt={10}>
        <Container maxW="container.xl">
          <Text textAlign="center">
            DeMi © 2025 by <Link color="blue.500" href="https://github.com/katyakrsn"  >Ekaterina Krasnova</Link> and <Link color="blue.500" href="https://github.com/mjavadf"  >Javad Farokhi</Link> is licensed under the <Link color="blue.500" href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"  >CC BY-NC 4.0</Link>
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;