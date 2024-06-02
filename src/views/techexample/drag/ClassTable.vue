<script setup lang="ts">
let source;
// 判断父级元素是否需要变色
function getDropNode(node) {
  while (node) {
    if (node.dataset && node.dataset.drop) {
      return node;
    }
    node = node.parentNode;
  }
}

function clearStyles() {
  document.querySelectorAll('.drop-over').forEach(node => {
    node.classList.remove('drop-over');
  });
}
const start = event => {
  event.dataTransfer.effectAllowed = event.target.dataset.effect;
  source = event.target;
};
const over = event => {
  event.preventDefault();
};
// 进入到容器后触发的事件
const enter = event => {
  const dropNode = getDropNode(event.target);
  if (!dropNode) {
    return;
  }
  clearStyles();
  if (source.dataset.effect === event.target.dataset.drop) {
    dropNode.classList.add('drop-over');
  }
};
const onDrop = event => {
  console.log('onDrop');
  clearStyles();
  const dropNode = getDropNode(event.target);
  if (!dropNode) return;
  if (source.dataset.effect !== event.target.dataset.drop) {
    return;
  }
  if (dropNode.dataset.drop === 'copy') {
    const cloned = source.cloneNode(true);
    cloned.dataset.effect = 'move';
    dropNode.innerHTML = '';
    dropNode.appendChild(cloned);
  }
  if (dropNode.dataset.drop === 'move') {
    source.remove();
  }
};
</script>

<template>
  <div>
    <div
      @dragstart="start"
      @dragover="over"
      @dragenter="enter"
      @drop="onDrop"
      class="container"
    >
      <div class="left" data-drop="move">
        <div draggable="true" data-effect="copy" class="item bg-amber-600">
          语文
        </div>
        <div draggable="true" data-effect="copy" class="item bg-amber-200">
          数学
        </div>
        <div draggable="true" data-effect="copy" class="item bg-emerald-300">
          英语
        </div>
        <div draggable="true" data-effect="copy" class="item bg-lime-500">
          物理
        </div>
      </div>
      <div class="right">
        <table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <td />
              <th>星期一</th>
              <th>星期二</th>
              <th>星期三</th>
              <th>星期四</th>
              <th>星期五</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="4" class="span">上午</th>
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
            </tr>
            <tr>
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
            </tr>
            <tr>
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
            </tr>
            <tr>
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
              <td data-drop="copy" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;

  .left {
    float: left;
    border: 1px solid #13ce66;
  }

  .right {
    margin-left: 100px;
    border: 1px solid #1f1f1f;
  }
}

td {
  height: 50px;
  padding: 15px;
  text-align: center;
  background: #dce1ec;
  border: 1px solid #13ce66;
}

.item {
  margin: 10px;
}

.drop-over {
  background: #555a64;
}
</style>
