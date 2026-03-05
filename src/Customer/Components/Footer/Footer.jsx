import { Grid, Typography, Button, Box, IconButton, TextField } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#111",
                color: "#e5e7eb",
                textAlign: "center",
                pt: 10,
                pb: 6,
                mt: 10,
                width: "100%",
                borderTop: "1px solid #333",
            }}
        >
            <Grid
                container
                sx={{
                    px: { xs: 2, sm: 5, md: 10 },
                }}
                spacing={4}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography 
                        sx={{ 
                            pb: 3, 
                            fontWeight: 700, 
                            letterSpacing: '0.05em',
                            color: "white" 
                        }} 
                        variant="h6"
                    >
                        Company
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((item) => (
                            <Typography 
                                key={item}
                                variant="body2" 
                                sx={{ 
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white', textDecoration: 'underline' },
                                    fontWeight: 400,
                                    color: '#9ca3af'
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography 
                        sx={{ 
                            pb: 3, 
                            fontWeight: 700, 
                            letterSpacing: '0.05em',
                            color: "white" 
                        }} 
                        variant="h6"
                    >
                        Solutions
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'].map((item) => (
                            <Typography 
                                key={item}
                                variant="body2" 
                                sx={{ 
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white', textDecoration: 'underline' },
                                    fontWeight: 400,
                                    color: '#9ca3af'
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography 
                        sx={{ 
                            pb: 3, 
                            fontWeight: 700, 
                            letterSpacing: '0.05em',
                            color: "white" 
                        }} 
                        variant="h6"
                    >
                        Documentation
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {['Guides', 'API Status', 'Integrations', 'SDKs'].map((item) => (
                            <Typography 
                                key={item}
                                variant="body2" 
                                sx={{ 
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white', textDecoration: 'underline' },
                                    fontWeight: 400,
                                    color: '#9ca3af'
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography 
                        sx={{ 
                            pb: 3, 
                            fontWeight: 700, 
                            letterSpacing: '0.05em',
                            color: "white" 
                        }} 
                        variant="h6"
                    >
                        Legal
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {['Claim', 'Privacy', 'Terms', 'Security'].map((item) => (
                            <Typography 
                                key={item}
                                variant="body2" 
                                sx={{ 
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white', textDecoration: 'underline' },
                                    fontWeight: 400,
                                    color: '#9ca3af'
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ pt: 10, borderBottom: '1px solid #333', pb: 5 }}>
                    <Typography variant="body2" sx={{ color: '#9ca3af', mb: 2 }}>
                        Subscribe to our newsletter for the latest updates.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        <TextField 
                            size="small" 
                            placeholder="Email address" 
                            sx={{ 
                                bgcolor: '#1a1a1a', 
                                border: '1px solid #444',
                                input: { color: 'white' },
                                width: { xs: '100%', sm: '300px' }
                            }} 
                        />
                        <Button variant="contained" sx={{ bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }}>
                            Subscribe
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, pt: 5 }}>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        &copy; 2023 My E-Commerce Store. All rights reserved.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: 'white' } }}>
                            <TwitterIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: 'white' } }}>
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: 'white' } }}>
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: 'white' } }}>
                            <InstagramIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Grid>
                
                <Grid item xs={12} sx={{ pt: 2 }}>
                    <Typography variant="caption" sx={{ color: '#4b5563' }}>
                        Made with love ❤️ by Ashwani.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;

