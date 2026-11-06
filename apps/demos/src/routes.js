import BasicInit from "./cases/BasicInit.svelte";
import BackendUrl from "./cases/BackendUrl.svelte";
import CustomBackend from "./cases/CustomBackend.svelte";
import BackendResolve from "./cases/BackendResolve.svelte";
import Events from "./cases/Events.svelte";
import Locales from "./cases/Locales.svelte";

export const links = [
	["/base/:skin", "Tasklist basic", BasicInit, "BasicInit"],
	["/events/:skin", "Events", Events, "Events"],
	["/locales/:skin", "Locales", Locales, "Locales"],
	["/backend-url/:skin", "Save to backend", BackendUrl, "BackendUrl"],
	["/backend-custom/:skin", "Custom backend", CustomBackend, "CustomBackend"],
	[
		"/data-resolve/:skin",
		"Resolve and fetch",
		BackendResolve,
		"BackendResolve",
	],
];
