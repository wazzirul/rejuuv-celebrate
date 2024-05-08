import styled from '@emotion/styled';
import CelebratePattern from '../../public/assets/images/hero-pattern.svg'

export const CelebrateSection = styled.section(() => ({
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #081C10 32.09%, #4E400F 105.63%)',
    height: '977px',
    '& .gradient-overlay' : {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        zIndex: `100`,
        height: '16.9%',
        background: 'linear-gradient(0deg, rgba(48, 50, 18, 0.00) 7.39%, rgba(15, 17, 7, 0.70) 49.93%, #010302 96.17%)',
    },
    '& .gradient-overlay-bottom' : {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        zIndex: `100`,
        height: '430px',
        // background: 'linear-gradient(to bottom, rgba(48, 50, 18, 0), rgba(15, 17, 7, 0.703125) 53.6458%, #091D11)',
        background: `linear-gradient(180deg, rgba(48, 50, 18, 0.00) 7.39%, rgba(15, 17, 7, 0.70) 55.02%, #091D11 96.17%)`,
    },
}))

export const CelebrateNavbar = styled.nav(()=> ({
    position: 'relative',
    padding: `19px 0`,
    zIndex: `10000`,

    '& .container' : {
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 576px)' : {
            width: '560px',
        },
        '@media (min-width: 768px)' : {
            width: '720px',
        },
        '@media (min-width: 992px)' : {
            width: '960px',
        },
        '@media (min-width: 1200px)' : {
            width: '1140px',
        },
        '@media (min-width: 1400px)' : {
            width: '1320px',
        }
    },
    '& .navbar-wrapper' : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        width: '100%',
    },
    // Left Menus
    '& .left-menu' : {
        display: 'flex',
        alignItems: 'center',
        gap: '52px',

        '@media (max-width: 1200px)' : {
            gap: '20px',
        },
        '@media (max-width: 992px)' : {
            gap: '32px',
        },
        '& .navbar-logo' : {
            '@media (max-width: 576px)' : {
                display: 'none',
            },
        },
        '& .navbar-menu' : {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            '@media (max-width: 992px)' : {
                display: 'none',
            },
        },
    },
    // Hamburger
    '& .navbar-hamburger-button' : {
        display: 'flex',
        padding: '7px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        '@media (min-width: 992px)' : {
            display: 'none',
        },
    },
    // Dropdown
    '& .navbar-dropdown-toggle' : {
        display: 'flex',
        padding: '12px',
        alignItems: 'center',
        gap: '8px',
        background: 'transparent',
        border: 'none',
        outline: 'none',

        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#ffff',
    },
    // Rigt Menus
    '& .right-menu' : {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        
        '& .cta-button' : {
            display: 'flex',
            padding: '7px 18px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            border: '1px solid #F99E26',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '24px',
            color: '#F99E26',
            cursor: 'pointer',
            transition: 'all .2s',
            '@media (max-width: 992px)' : {
                display: 'none',
            },
            '&:hover' : {
                background:'#F99E26',
                color: '#fff'
            }
        },
        '& .icon-button' : {
            display: 'flex',
            padding: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            '@media (max-width: 576px)' : {
                padding: '4px',
            },
        },
        '& .profile-button' : {
            display: 'flex',
            padding: '7px',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            outline: 'none',
            border: '1px solid #fff',
            borderRadius: '100px',
            '@media (max-width: 576px)' : {
                padding: '4px',
            },
            '& .icon-wrap' : {
                padding: '5px',
                '@media (max-width: 576px)' : {
                    padding: '4px',
                },
            },
            '& .icon-wrap-avatar' : {
                background: '#fff',
                borderRadius: '100px',
            },
        },
    },
}))

export const CelebrateContent = styled.div(()=>({
    position: 'relative',
    zIndex: `100`,
    padding: '189px 0 406px',
    '& .container' : {
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 576px)' : {
            width: '560px',
        },
        '@media (min-width: 768px)' : {
            width: '720px',
        },
        '@media (min-width: 992px)' : {
            width: '960px',
        },
        '@media (min-width: 1200px)' : {
            width: '1140px',
        },
        '@media (min-width: 1400px)' : {
            width: '1320px',
        }
    },
    '& .preview-inner' : {
        margin: '0 auto',
        maxWidth: '612px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '160px',
        margin: '0 auto',
        maxWidth: '612px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '160px',
    },
    '& .preview-content' : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center',

        '& .preview-content-tag' : {
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '24px',
            color: '#F99E26',
        },
        '& .preview-content-title' : {
            fontSize: '64px',
            fontWeight: '700',
            lineHeight: '70px',
            letterSpacing: '-1.28px',
            background: 'linear-gradient(180deg, #FFF 0%, #C79C1E 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '532px',
        },
        '& .preview-content-subtitle' : {
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
            color: '#FFF',
            maxWidth: '426px',
        },
    },
    '& .preview-heading': {
        '& .preview-title' : {
            fontSize: '64px',
            fontWeight: '500',
            lineHeight: '70px',
            color: '#fff',
            letterSpacing: '-1.28px',

            '@media (max-width: 768px)' : {
                fontSize: '36px',
                lineHeight: '42px',
                letterSpacing: '-0.72px',
            },
        },
        '& .preview-subtitle' : {
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '28px',
            color: '#fff',

            '@media (max-width: 768px)' : {
                fontSize: '16px',
                lineHeight: '26px',
            },
        },
    },
    '& .preview-cta': {
        display: 'flex',
        width: '100%',
        maxWidth: '240px',
        padding: '14px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        background: '#F99E26',
        border: 'none',
        borderRadius: '2px',
        fontSize: '16px',
        color: '#fff',
        fontWeight: '700',
        lineHeight: '26px',
        transition: 'background-color .2s',
        cursor: 'pointer',

        '&:hover' : {
            background: '#df8106',
        }
    }

}))