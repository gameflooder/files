import "./module-workers-polyfill-5503f0ff-be32a0e2.js";

import "./subworkers-f28dd231-9e75e91e.js";

const r = new URL(new URL("main-83dc5fab.js", import.meta.url).href, import.meta.url), e = new Worker(r.href, {
    type: "module"
});

export { e as worker };
