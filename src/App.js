import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRoutes, useLocation } from "react-router-dom";
import Pages from "./pages";

const motionDetails = {
    style: { position: "fixed", top: "0", left: "0", width: "100%", height: "100%" },
    initial: { opacity: 0, left: "-2%", top: "-2%" },
    animate: { opacity: 1, left: "0", top: "0" },
    exit: { opacity: 0, left: "2%", top: "-2%" },
    transition: { duration: 0.3 }
};

function MotionWrapper(props) {
    return (
        <motion.div
            style={motionDetails.style}
            initial={motionDetails.initial}
            animate={motionDetails.animate}
            exit={motionDetails.exit}
            transition={motionDetails.transition}
            key={useLocation().pathname}
        >
            {props.children}
        </motion.div>
    );
}

function App() {
    const [loggedIn] = useState(false);

    // When everything is loaded, hide the splash screen.
    setTimeout(() => document.querySelector("#splashscreen").classList.add("hide"), 1000);

    return (
        <AnimatePresence>
            {
                useRoutes([
                    {
                        path: "/",
                        element: (
                            <MotionWrapper>
                                <Pages.Start />
                            </MotionWrapper>
                        ),
                    },
                    {
                        path: "/enter",
                        element: (
                            <MotionWrapper>
                                <Pages.Enter />
                            </MotionWrapper>
                        ),
                    },
                    {
                        path: "/join",
                        element: (
                            <MotionWrapper>
                                <Pages.Join />
                            </MotionWrapper>
                        ),
                    },
                    {
                        path: "/reset",
                        element: (
                            <MotionWrapper>
                                <Pages.Reset />
                            </MotionWrapper>
                        ),
                    },
                    {
                        path: "/stories",
                        element: (
                            <MotionWrapper>
                                <Pages.Stories loggedIn={loggedIn} />
                            </MotionWrapper>
                        ),
                    },
                    {
                        path: "/groups",
                        element: (
                            <MotionWrapper>
                                <Pages.Groups loggedIn={loggedIn} />
                            </MotionWrapper>
                        ),
                    }
                ])
            }
        </AnimatePresence>
    );
}

export default App;
