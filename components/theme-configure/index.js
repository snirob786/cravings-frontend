import React, { useEffect, useState } from "react";

export default function ThemeConfigure() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const body = document.body;
        body.setAttribute("data-theme", theme);
    }, [theme]);
}
