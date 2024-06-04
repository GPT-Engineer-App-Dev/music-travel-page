import { Container, VStack, Heading, Text, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Rocking Band
        </Heading>
        <Text fontSize="xl">Join us on our epic tour across the country!</Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNzQ1MjE5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Band performing live" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Tickets
        </Button>
        <VStack spacing={4}>
          <Heading as="h2" size="lg">
            Upcoming Shows
          </Heading>
          <Text>New York, NY - October 10, 2023</Text>
          <Text>Los Angeles, CA - October 15, 2023</Text>
          <Text>Chicago, IL - October 20, 2023</Text>
        </VStack>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
