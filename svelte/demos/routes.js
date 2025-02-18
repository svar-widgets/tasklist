import BasicInit from "./cases/BasicInit.svelte";
import BackendUrl from "./cases/BackendUrl.svelte";
import CustomBackend from "./cases/CustomBackend.svelte";
import BackendResolve from "./cases/BackendResolve.svelte";
import Events from "./cases/Events.svelte";
import Locales from "./cases/Locales.svelte";

export const links = [
	["/base/:skin", "Tasklist basic", BasicInit],
	["/events/:skin", "Events", Events],
	["/locales/:skin", "Locales", Locales],
	["/backend-url/:skin", "Save to backend", BackendUrl],
	["/backend-custom/:skin", "Custom backend", CustomBackend],
	["/data-resolve/:skin", "Resolve and fetch", BackendResolve],
];
