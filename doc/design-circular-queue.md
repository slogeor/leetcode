#### 题目描述
循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为环形缓冲器。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：
- MyCircularQueue(k): 构造器，设置队列长度为 k
- Front: 从队首获取元素。如果队列为空，返回 -1
- Rear: 获取队尾元素。如果队列为空，返回 -1
- enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真
- deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真
- isEmpty(): 检查循环队列是否为空
- isFull(): 检查循环队列是否已满


```
实例
MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
```

提示：
- 所有的值都在 0 至 1000 的范围内
- 操作数将在 1 至 1000 的范围内
- 请不要使用内置的队列库

#### 方案:
- 定义四个属性，head 指向队头、tail 指向队尾(队列最后一个元素的下一个空位)、queue 存放数据、size 队列长度，一般是长度 + 1
- 入队操作: this.tail = (this.tail + 1) % this.size;
- 出队操作: this.head = (this.head + 1) % this.size;
- 队空判断: this.tail === this.head
- 队满判断: (this.tail + 1) % this.size === this.head
- 取队尾数据: this.queue[(this.size + this.tail - 1) % this.size]
- 取队头元素: this.queue[this.head % this.size]

复杂度分析
- 入队操作时间复杂度: O(1)
- 入队操作空间复杂度: O(1)
- 出队操作时间复杂度: O(1)
- 出队操作空间复杂度: O(1)

#### code
[JavaScript: design-circular-queue](../code/JavaScript/design-circular-queue.js)

#### 链接
- [https://leetcode-cn.com/problems/design-circular-queue/](https://leetcode-cn.com/problems/design-circular-queue/)