import { Box, useMediaQuery } from "@mui/material"
import Navbar from "../../scenes/navBar/index.jsx"
import { useSelector } from "react-redux"
import UserWidgets from "../../scenes/widgets/UserWidgets.jsx"


const index = () => {

  const  isNonMobileScreen = useMediaQuery("(min-width:1000px)")
  const {_id, picturePath } = useSelector((state) =>state.user)

  return (
    <Box>
      <Navbar />
      <Box width="100%"
      padding="2rem 6%"
      display={isNonMobileScreen ? "flex" : "block"}
      gap="0.5rem"
      justifyContent="space-between">
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidgets userId={_id } picturePath={picturePath} />
        </Box>
        <Box flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <UserWidgets userId={_id} picturePath={picturePath} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default index
