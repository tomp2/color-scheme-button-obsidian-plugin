import { Plugin } from "obsidian";

export default class ColorSchemeButtonPlugin extends Plugin {
	async onload() {
		this.addRibbonIcon("sun-moon", "Toggle color scheme", () => {
			const newTheme = document.body.classList.contains("theme-dark") ? "moonstone" : "obsidian";
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			this.app.vault.setConfig("theme", newTheme);
			this.app.workspace.trigger("css-change");
		});
	}
}
