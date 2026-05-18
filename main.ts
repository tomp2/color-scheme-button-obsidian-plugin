import { Plugin } from "obsidian";

export default class ColorSchemeButtonPlugin extends Plugin {
	async onload() {
		// The vault.setConfig isn't in the public API so typescript and eslint will complain about it,
		// but it works and is the only way to change the theme programmatically according to my knowledge.
		this.addRibbonIcon("sun-moon", "Toggle color scheme", () => {
			if ("setConfig" in this.app.vault && typeof this.app.vault.setConfig === "function") {
				if (document.body.classList.contains("theme-dark")) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-call
					this.app.vault.setConfig("theme", "moonstone");
				} else if (document.body.classList.contains("theme-light")) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-call
					this.app.vault.setConfig("theme", "obsidian");
				}
				this.app.workspace.trigger("css-change");
			}
		});
	}
}
