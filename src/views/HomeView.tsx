import { Box } from "@mui/material"
import { PopularMovies } from "../components/popular/PopularMovies"
import { HeroBanner } from "../components/HeroBanner"

export const HomeView = () => {
  return (
    <Box>
        <HeroBanner />
        <PopularMovies />
        
    </Box>
  )
}
