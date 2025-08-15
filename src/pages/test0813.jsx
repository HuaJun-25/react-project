import { useState, useEffect, useRef } from "react";
import "./TeamCarousel.css"; // 需要把你的CSS搬到這個檔案

const teamMembers = [
    { name: "Emily Kim", role: "Founder", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Michael Steward", role: "Creative Director", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Emma Rodriguez", role: "Lead Developer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Julia Gimmel", role: "UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Lisa Anderson", role: "Marketing Manager", img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "James Wilson", role: "Product Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3" }
];

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const updateCarousel = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);
        const total = teamMembers.length;
        setCurrentIndex((newIndex + total) % total);

        setTimeout(() => {
            setIsAnimating(false);
        }, 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
        if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) updateCarousel(currentIndex + 1);
            else updateCarousel(currentIndex - 1);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    });
}

const test0813 = () => {
    return (
        <>





            <div>
                <h1 className="about-title">OUR TEAM</h1>

                <div className="carousel-container">
                    <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>‹</button>

                    <div className="carousel-track">
                        {teamMembers.map((member, i) => {
                            const total = teamMembers.length;
                            const offset = (i - currentIndex + total) % total;
                            let className = "card";
                            if (offset === 0) className += " center";
                            else if (offset === 1) className += " right-1";
                            else if (offset === 2) className += " right-2";
                            else if (offset === total - 1) className += " left-1";
                            else if (offset === total - 2) className += " left-2";
                            else className += " hidden";

                            return (
                                <div className={className} key={i} onClick={() => updateCarousel(i)}>
                                    <img src={member.img} alt={member.name} />
                                </div>
                            );
                        })}
                    </div>

                    <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>›</button>
                </div>

                <div className="member-info">
                    <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
                    <p className="member-role">{teamMembers[currentIndex].role}</p>
                </div>

                <div className="dots">
                    {teamMembers.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === currentIndex ? "active" : ""}`}
                            onClick={() => updateCarousel(i)}
                        ></div>
                    ))}
                </div>
            </div>

        </>
    )
}


export default test0813