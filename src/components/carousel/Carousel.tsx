import React from 'react';
import { Carousel } from '@mantine/carousel';
import { createStyles, Image, getStylesRef, rem } from '@mantine/core';

export const Carousels = (): JSX.Element => {
    const useStyles = createStyles((theme) => ({
        price: {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },

        carousel: {
            '&:hover': {
                [`& .${getStylesRef('carouselControls')}`]: {
                    opacity: 1,
                },
            },
        },

        carouselControls: {
            ref: getStylesRef('carouselControls'),
            transition: 'opacity 150ms ease',
            opacity: 0,
        },

        carouselIndicator: {
            width: rem(16),
            height: rem(16),
            transition: 'width 250ms ease',

            '&[data-active]': {
                width: rem(16),
            },
        },
    }));
    const { classes } = useStyles();
    const images = [
        'https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2818&q=80',
        'https://plus.unsplash.com/premium_photo-1683749076840-1b5455a28e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2842&q=80',
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80'
    ];


    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
            <Image style={{ objectFit: "contain" }} src={image} height={500} />
        </Carousel.Slide>
    ));
    return (
        <>
            <Carousel

                withIndicators
                loop
                classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                }}
            >
                {slides}
            </Carousel>

        </>

    )
}
