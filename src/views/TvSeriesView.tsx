import { Grid } from "@mui/material"
import { HeroBanner } from "../components/HeroBanner"
import { serieOnAir } from "../data/serieOnair"

export const TvSeriesView = () => {
  return (
    <Grid container
        direction='column'
        justifyContent='space-between'
        sx={{
            m: 0
        }}>
          <Grid container sx={{m: 0 }}>
            <HeroBanner {... serieOnAir} title={serieOnAir.name}/>
        </Grid>

    </Grid>
  )
}
