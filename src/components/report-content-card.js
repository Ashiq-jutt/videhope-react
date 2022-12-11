import { Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as SVG from '../assets';
const ReportContentCard = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingBottom: '22px', paddingTop: '35px', width: '258px', backgroundColor: 'red', marginX: '15px' }}>
            <Box sx={{ height: '253px', }}>
            </Box>
            <Typography textAlign={'center'}>$454</Typography>
            <Grid justifyContent={'space-around'} container sx={{ backgroundColor: '#739D5F', borderRadius: '7px', paddingX: '11px', paddingY: '6px', alignSelf: 'center', width: '90px' }}>
                <img src={SVG.arrowUp}></img>
                <Typography>3.48%</Typography>
            </Grid>
        </Grid>
    );
};
export default ReportContentCard;