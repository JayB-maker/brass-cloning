import { Card, Image, LinkText } from "../../../ui"
import Navbar from "./navbar/Navbar"

const LeftSection = () => {
  return (
    <>
    <Card flex gap="48px" alignitems="center">
        <LinkText to="/"><Image src="assets/brass-logo.png" alt="brass logo" width="92px" /></LinkText>
        <Navbar />
    </Card>
    </>
  )
}

export default LeftSection