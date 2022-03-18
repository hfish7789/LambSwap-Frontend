import * as React from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Container,
    Paper,
    Accordion,
    AccordionSummary,
    Avatar,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    Link,
    useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Lamb2 from '../../assets/img/common/Lamb2.png';
import Eth_gerak from '../../assets/img/common/eth_gerak.png';
import Bnb_gerak from '../../assets/img/common/bnb_gerak.png';
import Lamb_gerak from '../../assets/img/common/lamb_gerak.png';
import Soland_gerak from '../../assets/img/common/soland_gerak.png';
import Poland_gerak from '../../assets/img/common/poland_gerak.png';
import Rectangle from '../../assets/img/common/Rectangle.png';
import Group1 from '../../assets/img/common/Group1.png';
import Group3 from '../../assets/img/common/Group3.png';
import Frame16 from '../../assets/img/common/Frame16.png';
import Rectangle2 from '../../assets/img/common/Rectangle2.png';
import CherrySwap from '../../assets/img/common/CherrySwap.png';
import Frame8 from '../../assets/img/common/Frame8.png';
import CobaBnb from '../../assets/img/common/coba-bnb.png';
import CobaEmpat from '../../assets/img/common/coba-empat.png';
import CobaEnam from '../../assets/img/common/coba-enam.png';
import CobaLapan from '../../assets/img/common/coba-lapan.png';
import CobaLima from '../../assets/img/common/coba-lima.png';
import CobaTiga from '../../assets/img/common/coba-tiga.png';
import CobaTuju from '../../assets/img/common/coba-tuju.png';
import CobaDua from '../../assets/img/common/coba-dua.png';
import Icon2 from '../../assets/img/common/Icon2.png';
import Analyzing from '../../assets/img/common/analyzing-accounting1.png';
import Frame22 from '../../assets/img/ecosystem/Frame 22.png';
import Frame22_1 from '../../assets/img/ecosystem/Frame 22-1.png';
import Frame22_2 from '../../assets/img/ecosystem/Frame 22-2.png';
import Frame22_3 from '../../assets/img/ecosystem/Frame 22-3.png';
import Frame22_4 from '../../assets/img/ecosystem/Frame 22-4.png';
import Frame22_5 from '../../assets/img/ecosystem/Frame 22-5.png';
import Frame22_6 from '../../assets/img/ecosystem/Frame 22-6.png';
import Frame22_7 from '../../assets/img/ecosystem/Frame 22-7.png';
import Frame22_8 from '../../assets/img/ecosystem/Frame 22-8.png';
import Frame22_9 from '../../assets/img/ecosystem/Frame 22-9.png';
import Frame22_10 from '../../assets/img/ecosystem/Frame 22-10.png';
import Frame22_11 from '../../assets/img/ecosystem/Frame 22-11.png';
import Frame22_12 from '../../assets/img/ecosystem/Frame 22-12.png';
import Frame22_13 from '../../assets/img/ecosystem/Frame 22-13.png';
import Frame27 from '../../assets/img/ecosystem/Frame 27.png';
import Frame27_1 from '../../assets/img/ecosystem/Frame 27-1.png';
import Frame27_2 from '../../assets/img/ecosystem/Frame 27-2.png';
import Frame28 from '../../assets/img/ecosystem/Frame 28.png';
import Frame28_1 from '../../assets/img/ecosystem/Frame 28-1.png';
import Frame29 from '../../assets/img/ecosystem/Frame 29.png';
import './Home.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
}

const CustomDot = ({ onClick, active }) => {
    return (
        <li style={{ marginBottom: "-30px", padding: "2px" }}>
            <button
                style={{ background: active ? "#34F14B" : "#5B5B5B", width: "10px", height: "12px", borderWidth: 0, borderRadius: "50%", cursor: "pointer" }}
                onClick={() => onClick()}
            />
        </li>
    );
};
const HomePaper = styled(Paper)(() => ({
    background: "rgba(38, 38, 38, 1)"
}));
const HomeTypography1 = styled(Typography)(() => ({
    p: "12px",
    width: "90%"
}));
const HomeTypography3 = styled(Typography)(() => ({
    position: "absolute",
    animationDuration: "4s",
    animationIterationCount: "infinite"
}));
const HomeTypography4 = styled(Typography)(() => ({
    animation: "spin 4s linear infinite",
    position: "absolute"
}));
const HomeButton1 = styled(Button)(() => ({
    boxShadow: "inset -8px -8px 20px #2FD140, inset 8px 8px 20px #2FD140",
    borderRadius: "59px",
    padding: "18px",
    fontSize: "20px",
    margin: "0 18px 0 0",
    color: "white"
}));
const HomeButton2 = styled(Button)(() => ({
    background: "rgba(52, 241, 75, 0.06)",
    borderRadius: "8px",
}));


function Home(props) {
    const matches425 = useMediaQuery('(min-width:425px)');
    const matches600 = useMediaQuery('(min-width:600px)');
    const matches510 = useMediaQuery('(min-width:510px)');
    const matches1024 = useMediaQuery('(min-width:1024px)');
    const matches900 = useMediaQuery('(min-width:900px)');
    const matches1200 = useMediaQuery('(min-width:1200px)');

    const ecosystems = [Frame22, Frame22_1, Frame27, Frame28, Frame29, Frame22_2, Frame22_3, Frame22_4, Frame27_1, Frame28_1, Frame22_5, Frame22_6, Frame22_7, Frame22_8, Frame27_2, Frame22_9, Frame22_10, Frame22_11, Frame22_12, Frame22_13];
    const [Info, setInfo] = React.useState([
        { name: "Top volume", value: "$134B+" },
        { name: "Total users", value: "1.6M+" },
        { name: "Supported networks", value: "10" },
        { name: "Total trades", value: "11.7M+" },
        { name: "Access liquidity", value: "$55B+" },
        { name: "Aggregation share", value: "55.40%" },
        { name: "Source connected", value: "161" },
        { name: "Governance and utility token", value: "LST" }
    ]);

    const [expanded1, setExpanded1] = React.useState(true);
    const [expanded2, setExpanded2] = React.useState(true);
    const [earns, setEarns] = React.useState([1, 1, 1, 1, 1]);
    const [launchs, setLaunchpools] = React.useState([1, 1, 1, 1, 1]);

    return (
        <Grid>
            <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
                <Container>
                    <Grid container>
                        <Grid container xs={12} md={7} direction="column" sx={{ p: "107px 0 0 0" }} alignItems={matches900 ? "flex-start" : "center"}>
                            <Typography variant="h3" sx={{ p: "8px 0" }}>
                                Cross-chain
                            </Typography>
                            <Typography variant="h3" sx={{ p: "8px 0" }} align="center">
                                Aggregation Protocol
                            </Typography>
                            <Typography variant="h5" sx={{ p: "20px 0" }} align={matches900 ? "left" : "center"}>
                                Access multi-chain liquidity sources on one platform
                            </Typography>
                            <Grid direction="row">
                                <HomeButton1 onClick={() => props.value(1)} sx={{ margin: "5px", fontSize: `${matches600 ? 20 : 12}px` }}>Enter SWAP</HomeButton1>
                                <HomeButton1 onClick={() => props.value(2)} sx={{ margin: "5px", fontSize: `${matches600 ? 20 : 12}px` }}>Enter HUB</HomeButton1>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" xs={12} sm={6} md={5} sx={{ p: "46px 0 0" }} alignItems={matches1024 ? `flex-start` : `${matches900 ? `flex-start` : `${matches600 ? `center` : `flex-start`}`}`}>
                            {matches425 ?
                                <Box>
                                    <Typography component="img" src={Lamb2} sx={{ position: "absolute", p: "95px 0 0 36px" }}></Typography>
                                    <HomeTypography3 component="img" src={Eth_gerak} sx={{ animationName: "Eth_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Bnb_gerak} sx={{ animationName: "Bnb_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Lamb_gerak} sx={{ animationName: "Lamb_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Soland_gerak} sx={{ animationName: "Soland_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Poland_gerak} sx={{ animationName: "Poland_gerak" }}></HomeTypography3>
                                </Box>
                                :
                                <Box>
                                    <Typography component="img" src={Lamb2} sx={{ width: "70%", position: "absolute", p: "75px 0 0 7%" }}></Typography>
                                    <HomeTypography3 component="img" src={Eth_gerak} sx={{ width: "19%", animationName: "Eth_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Bnb_gerak} sx={{ width: "20%", animationName: "Bnb_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Lamb_gerak} sx={{ width: "18%", animationName: "Lamb_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Soland_gerak} sx={{ width: "20%", animationName: "Soland_gerak" }}></HomeTypography3>
                                    <HomeTypography3 component="img" src={Poland_gerak} sx={{ width: "20%", animationName: "Poland_gerak" }}></HomeTypography3>
                                </Box>
                            }
                        </Grid>
                    </Grid>
                    <Grid direction="column" sx={{ p: "18px 0 140px" }} className='site-info'>
                        <Grid container sx={{ p: "0 11%" }}>
                            {Info.map((data, index) => (
                                <Grid xs={6} sm={4} md={3} sx={{ p: "20px 0" }} key={index}>
                                    <Typography variant='h5'>{data.value}</Typography>
                                    <Typography variant='p'>{data.name}</Typography>
                                </Grid>
                            ))
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ pt: "96px" }}>
                <Container>
                    <Grid container direction="row" justifyContent="center" sx={{ lineHeight: "5" }}>
                        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                customDot={<CustomDot />}
                            >
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                            </Carousel>
                        </Box>
                    </Grid>
                    <Grid container sx={{ p: "120px 0" }} justifyContent="space-between">
                        <Grid xs={12} md={6} sx={{ overflow: `${matches900 ? "none" : "auto"}` }}>
                            <Accordion expanded={expanded1} onChange={() => setExpanded1(!expanded1)} sx={{ background: "#191919", minWidth: `${matches900 ? "none" : "500px"}` }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "rgba(52, 241, 75, 1)" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='h5'>Earn LST + Fees in Farms</Typography>
                                </AccordionSummary>
                                <Paper sx={{ background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.99) 100%)", p: "0 26px" }}>
                                    {earns.map((data, index) => (
                                        <Stack key={index}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: "26.6px 0" }}>
                                                <Stack direction="row" alignItems="center">
                                                    <Typography component='img' src={Group1} />&nbsp;&nbsp;
                                                    <Typography>USDT-BSW</Typography>
                                                </Stack>
                                                <Stack direction="column" alignItems="center">
                                                    <Typography component="img" sx={{ width: "45px", height: "15px" }} src={Frame16} />
                                                    <Typography color="#34F14B" sx={{ p: "5px" }}>73.68%</Typography>
                                                </Stack>
                                                <Stack>
                                                    <HomeButton2>Start Farm</HomeButton2>
                                                </Stack>
                                            </Stack>
                                            {index < earns.length - 1 &&
                                                <Divider />
                                            }
                                        </Stack>
                                    ))
                                    }
                                </Paper>
                            </Accordion>
                        </Grid>
                        <Grid xs={12} md={5.8} sx={{ overflow: `${matches900 ? "none" : "auto"}` }}>
                            <Accordion expanded={expanded2} onChange={() => setExpanded2(!expanded2)} sx={{ background: "#191919", minWidth: `${matches900 ? "none" : "500px"}` }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "rgba(52, 241, 75, 1)" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='h5'>Launchpools</Typography>
                                </AccordionSummary>
                                {launchs.map((data, index) => (
                                    <Paper key={index} sx={{ p: "17px 1.25% 11px", background: "rgba(38, 38, 38, 1)", mt: `24px` }}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Stack direction="row" sx={{ p: "2px 0" }} justifyContent="center">
                                                <Typography component="img" src={Group3} />&nbsp;&nbsp;
                                                <Stack direction="column">
                                                    <Typography>Auto Compound</Typography>
                                                    <Typography sx={{ color: "#34F14B", fontSize: "12px" }}>Stake bfs</Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack direction="column" alignItems="center">
                                                <Typography component="img" sx={{ width: "45px", height: "15px" }} src={Frame16} />
                                                <Typography color="#34F14B" sx={{ p: "5px" }}>73.68%</Typography>
                                            </Stack>
                                            <Stack>
                                                <HomeButton2>Start Farm</HomeButton2>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                ))
                                }
                            </Accordion>
                        </Grid>
                    </Grid>
                    <Stack sx={{ p: "56px 0" }}>
                        <Grid container direction="column" alignItems="center">
                            <Typography sx={{ fontSize: "36px" }}>Liquidity Source</Typography>
                            <Box sx={{ flexGrow: 1, maxWidth: "300px", p: "34px 0" }}>
                                <Carousel responsive={responsive1}>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                </Carousel>
                                {/* <Typography component="img" src={Rectangle} sx={{ width: `${matches600 ? 95 : 100}%`, cursor: "pointer" }}></Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>ETH</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>BSC</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Polygon</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Solana</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Arbitrum</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Optimism</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Avalanche</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Fantom</Typography>
                                    <Typography sx={{ textAlign: "center" }} variant='h5'>Okex</Typography> */}
                            </Box>
                        </Grid>
                        <Grid container sx={{ p: "42px 0" }} justifyContent="space-between">
                            {[0, 1, 2].map((data, index) => (
                                <Grid xs={12} sm={3.9} md={3.9} key={index}>
                                    <HomePaper elevation={12} sx={{ p: "34px 9.25%", m: "8px 0" }}>
                                        <Grid container direction="row">
                                            <Grid xs={7} md={6} sx={{ pt: "21px" }}>
                                                <Stack direction="row" alignItems="center" sx={{ p: "8px 0" }}>
                                                    <Avatar alt="LP" src={Rectangle2} variant="square" />&nbsp;&nbsp;
                                                    <Typography component="div">Jswap</Typography>
                                                </Stack>
                                                <Stack direction="row" alignItems="center" sx={{ p: "8px 0" }}>
                                                    <Avatar alt="LP" src={CherrySwap} variant="square" />&nbsp;&nbsp;
                                                    <Typography component="div">Cherry swap</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid xs={5} md={6} sx={{ pl: "4%" }}>
                                                <Typography component="img" src={Frame8} sx={{ width: `${!matches1200 && 100}%` }} />
                                            </Grid>
                                        </Grid>
                                    </HomePaper>
                                </Grid>
                            ))
                            }
                        </Grid>
                        <Grid container sx={{ p: `56px 0 ${matches1200 ? 200 : matches510 ? 450 : 320}px` }}>
                            <Grid xs={12} lg={7} sx={{ mt: `${matches1200 ? 131 : 0}px` }} direction="column">
                                <Typography sx={{ fontSize: "36px" }} gutterBottom align={!matches1200 ? "center" : "left"}>Find the best prices across multiple chains.</Typography>
                                <Stack direction="row" justifyContent={!matches1200 && "center"}>
                                    <RadioGroup defaultValue="dex" name="radio-buttons-group">
                                        <FormControlLabel label="Aggregate liquidity sources across leading DEXs." control={<Radio />} value="dex" />
                                        <FormControlLabel label="Discover the most efficient trading routes." control={<Radio />} value="route" />
                                        <FormControlLabel label="Trade safely with no limits and hidden fees." control={<Radio />} value="fee" />
                                    </RadioGroup>
                                </Stack>
                            </Grid>
                            <Grid container xs={12} lg={5} justifyContent="center">
                                {matches510 ?
                                    <Box sx={{ width: "100%", maxWidth: "450px" }}>
                                        <HomeTypography4 component="img" src={CobaBnb} sx={{ m: "36px 0 0 162px" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaLapan} sx={{ m: "83px 0 0 28px" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaDua} sx={{ m: "106px 0 0 307px" }}></HomeTypography4>
                                        <Typography component="img" src={Icon2} sx={{ position: "absolute", m: "190px 0 0 149.8px" }}></Typography>
                                        <HomeTypography4 component="img" src={CobaTuju} sx={{ m: "206px 0 0 0" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaTiga} sx={{ m: "219px 0 0 340px" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaEnam} sx={{ m: "327px 0 0 28px" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaEmpat} sx={{ m: "336px 0 0 307px" }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaLima} sx={{ m: "361px 0 0 156px" }}></HomeTypography4>
                                    </Box>
                                    :
                                    <Box sx={{ width: "100%", maxWidth: "300px" }}>
                                        <HomeTypography4 component="img" src={CobaBnb} sx={{ width: "64px", m: `36px 0 0 104.5px` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaLapan} sx={{ width: "64px", m: `${83 - (83 - 36) * 0.3}px 0 0 18px` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaDua} sx={{ width: "64px", m: `${106 - (106 - 36) * 0.3}px 0 0 198px` }}></HomeTypography4>
                                        <Typography component="img" src={Icon2} sx={{ width: "80px", m: `${190 - (190 - 36) * 0.3}px 0 0 96.5px`, position: "absolute" }}></Typography>
                                        <HomeTypography4 component="img" src={CobaTuju} sx={{ width: "64px", m: `${206 - (206 - 36) * 0.3}px 0 0 0` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaTiga} sx={{ width: "64px", m: `${219 - (219 - 36) * 0.3}px 0 0 219px` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaEnam} sx={{ width: "64px", m: `${327 - (327 - 36) * 0.3}px 0 0 18px` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaEmpat} sx={{ width: "64px", m: `${336 - (336 - 36) * 0.3}px 0 0 198px` }}></HomeTypography4>
                                        <HomeTypography4 component="img" src={CobaLima} sx={{ width: "64px", m: `${361 - (361 - 36) * 0.3}px 0 0 104.5px` }}></HomeTypography4>
                                    </Box>
                                }
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>

                <Stack sx={{ p: "15px", background: "rgba(52, 241, 75, 0.02)" }}>
                    <Container>
                        <Grid container alignItems="center">
                            <Grid container xs={12} md={6} justifyContent="center">
                                <Typography component="img" src={Analyzing} sx={{ maxWidth: "100%" }}></Typography>
                            </Grid>
                            <Grid container direction="column" xs={12} md={6}>
                                <Typography sx={{ fontSize: "36px" }} gutterBottom align={!matches900 ? "center" : "left"}>Trade across chains with one click.</Typography>
                                <Stack direction="row" justifyContent={!matches900 && "center"}>
                                    <RadioGroup
                                        defaultValue="asset"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel label="Freely exchange multi-chain assets." control={<Radio />} value="asset" />
                                        <FormControlLabel label="Access different blockchain networks." control={<Radio />} value="network" />
                                        <FormControlLabel label="Bridge to Layer 2 networks." control={<Radio />} value="bridge" />
                                    </RadioGroup>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Stack>

                <Container>
                    <Stack sx={{ p: "96px 0 129px" }} direction="column">
                        <Grid sx={{ p: "38px 0" }} container justifyContent="center">
                            <Typography variant='h4' align='center'>Ecosystem partners</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="center">
                            {ecosystems.map((data, index) => (
                                <Grid xs={6} sm={3} md={2.4} container direction="column" alignItems="center" key={index}>
                                    <Link href="#"><HomeTypography1 component="img" src={data}></HomeTypography1></Link>
                                </Grid>
                            ))
                            }
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </Grid>
    );
}

export default Home;