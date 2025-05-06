import {
    Box,
    Heading,
    Link,
    Text,
    Stack,
  } from "@chakra-ui/react"
  
  function InformationPage() {
    return (
      <Box maxW="800px" mx="auto" py={10} px={6}>
        <Stack padding={6} direction="column">
          <Heading size="lg">Contact</Heading>
          <Text>
            For further information, feel free to reach us at our university emails:
          </Text>
          <Stack direction="column" padding={1}>
            <Link href="mailto:ekaterina.krasnova@studio.unibo.it" color="teal.500">
              ekaterina.krasnova@studio.unibo.it
            </Link>
            <Link href="mailto:mohammad.farokhi2@studio.unibo.it" color="teal.500">
              mohammad.farokhi2@studio.unibo.it
            </Link>
          </Stack>
  
          <Box borderBottom="1px solid #ccc" />
  
          <Heading size="lg">Disclaimer</Heading>
          <Text>
            This project was developed as part of the "Open Access and Digital Ethics" course within the{" "}
            <Link href="https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge/" color="teal.500">
              Digital Humanities and Digital Knowledge
            </Link>{" "}
            Master’s Degree at the{" "}
            <Link href="https://www.unibo.it/en" color="teal.500">
              University of Bologna
            </Link>, under the supervision of Prof. Monica Palmirani.
          </Text>
  
          <Box borderBottom="1px solid #ccc" />
  
          <Heading size="lg">References</Heading>
          <Text>
            All datasets, metadata, and code produced for this project are licensed under the{" "}
            <Link href="https://creativecommons.org/licenses/by/4.0/" color="teal.500">
              Creative Commons Attribution 4.0 International License (CC BY 4.0)
            </Link>. For dataset-specific licenses, see the{" "}
            <Link href="https://demi-unibo.github.io/demi-front/documentation" color="teal.500">
              Documentation
            </Link>.
          </Text>
  
          <Box borderBottom="1px solid #ccc" />
  
          <Heading size="lg">Development Tools</Heading>
  
          <Heading size="md" mt={4}>Text Editor and Repository</Heading>
          <Box as="ul" pl={5} style={{ listStyleType: "disc" }}>
            <Box as="li" mb={2}>
              <Link href="https://code.visualstudio.com/license" color="teal.500">
                Visual Studio Code
              </Link>{" "}
              – Code editor with debugging and Git integration.
            </Box>
            <Box as="li">
              <Link href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" color="teal.500">
                GitHub
              </Link>{" "}
              – Repository hosting and version control.
            </Box>
          </Box>
  
          <Heading size="md" mt={4}>Back-end</Heading>
          <Box as="ul" pl={5} style={{ listStyleType: "disc" }}>
            <Box as="li" mb={2}><Link href="https://jupyter.org/about" color="teal.500">Jupyter Lab</Link></Box>
            <Box as="li" mb={2}><Link href="https://docs.python.org/3/license.html" color="teal.500">Python</Link></Box>
            <Box as="li" mb={2}><Link href="https://matplotlib.org/stable/project/license.html" color="teal.500">Matplotlib</Link></Box>
            <Box as="li" mb={2}><Link href="https://github.com/pandas-dev/pandas/blob/main/LICENSE" color="teal.500">Pandas</Link></Box>
            <Box as="li" mb={2}><Link href="https://github.com/mwaskom/seaborn/blob/master/LICENSE.md" color="teal.500">Seaborn</Link></Box>
            <Box as="li"><Link href="https://github.com/pycountry/pycountry/blob/main/LICENSE.txt" color="teal.500">Pycountry</Link></Box>
          </Box>
  
          <Heading size="md" mt={4}>Front-end</Heading>
          <Box as="ul" pl={5} style={{ listStyleType: "disc" }}>
            <Box as="li" mb={2}><Link href="https://github.com/facebook/react/blob/main/LICENSE" color="teal.500">React</Link></Box>
            <Box as="li" mb={2}><Link href="https://github.com/chakra-ui/chakra-ui/blob/main/LICENSE" color="teal.500">Chakra UI</Link></Box>
            <Box as="li" mb={2}><Link href="https://www.amcharts.com/terms-conditions/" color="teal.500">amCharts</Link></Box>
            <Box as="li" mb={2}><Link href="https://tanstack.com/terms" color="teal.500">TanStack Query</Link></Box>
            <Box as="li"><Link href="https://github.com/mholt/PapaParse" color="teal.500">PapaParse</Link></Box>
          </Box>
        </Stack>
      </Box>
    )
  }
  
  export default InformationPage
  