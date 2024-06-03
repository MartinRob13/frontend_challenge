import { Grid } from "@mui/material"
import { HeroBanner } from "../components/HeroBanner"
import { serieOnAir } from "../data/serieOnair"
import { PopularSeries } from "../components/popular/PopularSeries"
import { HorizontalSlider } from "../components/HorizontalSlider"
import { popularSeries } from "../data/popularSeries"

export const TvSeriesView = () => {
  return (
    <Grid container
        direction='column'
        justifyContent='space-between'
        sx={{
            m: 0
        }}>
          <Grid container sx={{m: 0 }}>
            <HeroBanner heroTitle="Now on air!"{... serieOnAir} title={serieOnAir.name} type='tvserie'/>
        </Grid>

        <Grid container sx={{ mt: 3 }}>
            <PopularSeries />
        </Grid>

        <Grid container  sx={{ mt: 4 }}>
          <HorizontalSlider title='Tv Series we recommend' series={popularSeries} />
        </Grid>

    </Grid>
  )
}
