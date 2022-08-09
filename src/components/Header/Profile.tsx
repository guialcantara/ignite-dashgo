import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align='center'
    >
      {showProfileData &&
        <Box mr={4} textAlign="right">
          <Text>Guilherme Alcantara</Text>
          <Text color="gray.300" fontSize="small">gui.absilva@outlook.com</Text>
        </Box>
      }


      <Avatar size="md" name="Guilherme Alcantara" src="https://github.com/guialcantara.png" />
    </Flex>
  )
}