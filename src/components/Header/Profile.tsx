import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align='center'
    >
      <Box mr={4} textAlign="right">
        <Text>Guilherme Alcantara</Text>
        <Text color="gray.300" fontSize="small">gui.absilva@outlook.com</Text>
      </Box>

      <Avatar size="md" name="Guilherme Alcantara" src="https://github.com/guialcantara.png" />
    </Flex>
  )
}