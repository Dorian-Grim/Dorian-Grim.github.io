export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d0db8520.js","imports":["_app/immutable/entry/start.d0db8520.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.a23fc408.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.01776660.js","imports":["_app/immutable/entry/app.01776660.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
