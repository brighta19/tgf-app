import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Pages from "./pages";

const motionDetails = {
    style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
    initial: { opacity: 0, left: "-2%", top: "-2%" },
    animate: { opacity: 1, left: "0", top: "0" },
    exit: { opacity: 0, left: "2%", top: "-2%" },
    transition: { duration: 0.3 }
};

function App() {
    const [loggedIn] = useState(false);

    const location = useLocation();

    // When everything is loaded, hide the splash screen.
    setTimeout(() => document.querySelector("#splashscreen").classList.add("hide"), 1000);

    return (
        <>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route path="/enter">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Enter />
                        </motion.div>
                    </Route>
                    <Route path="/join">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Join />
                        </motion.div>
                    </Route>
                    <Route path="/reset">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Reset />
                        </motion.div>
                    </Route>
                    <Route path="/stories">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Stories loggedIn={loggedIn} />
                        </motion.div>
                    </Route>
                    <Route path="/groups">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Groups loggedIn={loggedIn} />
                        </motion.div>
                    </Route>
                    <Route path="/">
                        <motion.div
                            style={motionDetails.style}
                            initial={motionDetails.initial}
                            animate={motionDetails.animate}
                            exit={motionDetails.exit}
                            transition={motionDetails.transition}
                        >
                            <Pages.Start />
                        </motion.div>
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;
