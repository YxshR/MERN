
import{Box,  useMediaQuery} from "@mui/material"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams} from "react-router-dom"
import Navbar from '../scenes/navBar'
import FriendListWidget from '../scenes/widgets/FriendListWidget'
import MyPostWidget from 'scenes/widgets/MyPostWidget'
import PostsWidget from 'scenes/widgets/PostsWidget'
import UserWidgets from 'scenes/widgets/UserWidgets'

const Profilepage = () => {
  const [users, setUser] = useState(null)
  const { userId } = useParams()
  const token = useSelector((state) => state.token)
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`,{
      method:"GET",
      headers:{ Authorization : `Bearer ${token}`}
    })
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    getUser()

  }, [])

  if (!users) return null


  return (
    <Box>
      <Navbar />
      <Box width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="2rem"
      justifyContent="center">
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidgets userId={ userId } picturePath={users.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId = { userId} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={users.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>

      </Box>
    </Box>
  )
}

export default Profilepage
