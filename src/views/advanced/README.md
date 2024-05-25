浏览器是根据帧渲染的

当单次渲染内容过多的时候就会导致卡顿，需要按时渲染

让任务分片执行

就是使用 requestIdleCallback API 来

16.6ms 是一帧的持续时间，浏览器会在 16.6ms 执行很多东西，如果有剩余的时间，就会执行 requestIdleCallback
