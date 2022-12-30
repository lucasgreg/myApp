import Container from '@mui/material/Container';
import Header from "../partials/Header"

import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => {
    return {
        container: {
            padding: "15px 0",
        }
    }
})


const Default = ({ children }) => {
    const { classes } = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default