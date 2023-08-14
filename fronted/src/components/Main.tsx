import React, { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
    // Add other prop types if needed
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <section className="main">
            {children}
        </section>
    );
}

export default Main;