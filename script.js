const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});


close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

// package container 1 
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });

    // package container 2 
    const imageList2 = document.querySelector(".slider-wrapper2 .image-list2");
    const slideButtons2 = document.querySelectorAll(".slider-wrapper2 .slide-button2");
    const sliderScrollbar2 = document.querySelector(".container2 .slider-scrollbar2");
    const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb2.addEventListener("mousedown", (e) => {
        const startX2 = e.clientX;
        const thumbPosition2 = scrollbarThumb2.offsetLeft;
        const maxThumbPosition2 = sliderScrollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX2 = e.clientX - startX2;
            const newThumbPosition2 = thumbPosition2 + deltaX2;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition2 = Math.max(0, Math.min(maxThumbPosition2, newThumbPosition2));
            const scrollPosition2 = (boundedPosition2 / maxThumbPosition2) * maxScrollLeft2;
            
            scrollbarThumb2.style.left = `${boundedPosition2}px`;
            imageList2.scrollLeft = scrollPosition2;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons2.forEach(button2 => {
        button2.addEventListener("click", () => {
            const direction2 = button2.id === "prev-slide" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction2;
            imageList2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons2 = () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "flex";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition2 = () => {
        const scrollPosition2 = imageList2.scrollLeft;
        const thumbPosition2 = (scrollPosition2 / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetWidth);
        scrollbarThumb2.style.left = `${thumbPosition2}px`;
    }
    // Call these two functions when image list scrolls
    imageList2.addEventListener("scroll", () => {
        updateScrollThumbPosition2();
        handleSlideButtons2();
    });

    // package container 3
    const imageList3 = document.querySelector(".slider-wrapper3 .image-list3");
    const slideButtons3 = document.querySelectorAll(".slider-wrapper3 .slide-button3");
    const sliderScrollbar3 = document.querySelector(".container3 .slider-scrollbar3");
    const scrollbarThumb3 = sliderScrollbar3.querySelector(".scrollbar-thumb3");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb3.addEventListener("mousedown", (e) => {
        const startX3 = e.clientX;
        const thumbPosition3 = scrollbarThumb3.offsetLeft;
        const maxThumbPosition3 = sliderScrollbar3.getBoundingClientRect().width - scrollbarThumb3.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX3 = e.clientX - startX3;
            const newThumbPosition3 = thumbPosition3 + deltaX3;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition3 = Math.max(0, Math.min(maxThumbPosition3, newThumbPosition3));
            const scrollPosition3 = (boundedPosition3 / maxThumbPosition3) * maxScrollLeft3;
            
            scrollbarThumb3.style.left = `${boundedPosition3}px`;
            imageList3.scrollLeft = scrollPosition3;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons3.forEach(button3 => {
        button3.addEventListener("click", () => {
            const direction3 = button3.id === "prev-slide" ? -1 : 1;
            const scrollAmount3 = imageList3.clientWidth * direction3;
            imageList3.scrollBy({ left: scrollAmount3, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons3 = () => {
        slideButtons3[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "flex";
        slideButtons3[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition3 = () => {
        const scrollPosition3 = imageList3.scrollLeft;
        const thumbPosition3 = (scrollPosition3 / maxScrollLeft3) * (sliderScrollbar3.clientWidth - scrollbarThumb3.offsetWidth);
        scrollbarThumb3.style.left = `${thumbPosition3}px`;
    }
    // Call these two functions when image list scrolls
    imageList3.addEventListener("scroll", () => {
        updateScrollThumbPosition3();
        handleSlideButtons3();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

