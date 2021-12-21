
// Алгоритм Хаффмана должен каждый раз находить два корневых узла с наименьшим весом из F. После построения нового дерева удалите эти два корневых узла и добавьте вновь построенное дерево. Этот процесс использует наименьшую кучу для достижения максимальной Подходящее.
// Сначала добавьте корневой узел леса в минимальную кучу, выполните цикл n – 1 раз, каждый цикл, удалите вершину наименьшей кучи дважды подряд, используйте эти две кучи Вверху постройте новое дерево и поместите корневой узел нового дерева в самую маленькую кучу. Верхняя часть кучи является корневым узлом дерева Хаффмана.
// Определяем класс, в котором хранятся код и вероятность

 // код
 var CodeNode = function(code, rate){
    this.code = code; // символ
    this.rate = rate; // вероятность
};
//  узел дерева
var TreeNode = function(data){
this.data = data;
this.leftChild = null;
this.rightChild = null;
this.parent = null;
};
// исходные данные
var code_dict = {
    'z' : 0.1,
    'q':0.1,
    'x': 0.2,
    'j':0.2,
    'k':0.6,
    'v': 0.9,
    'b':1.6,
    'y':1.6,
    'g':1.7,
    'f':1.8,
    'w':1.9,
    'm': 2.1,
    'u':2.4,
    'c': 2.6,
    'l':3.4,
    'd': 3.5,
    'r': 4.8,
    'h': 4.9,
    's':5.1,
    'b': 5.5,
    'i':5.8,
    'o':5.9,
    'a': 6.8,
    't':7.7,
    'e':10.2,
    ' ':17.3

};
code_dict = {
    'b': 0.08,
    'e': 0.256,
    'f':0.048,
    'g':0.042,
    'm':0.064,
    'n':0.23,
    'a': 0.278
}
console.log(15+48+9+8+12+43+52)
d = 187
console.log(15/d,48/d,9/d,8/d,12/d,43/d,52/d)
var forest = [];

for(var key in code_dict){
 var item = new CodeNode(key, code_dict[key]);
 forest.push(new TreeNode(item));
}

// Определение класса дерева Хаффмана
function HuffmanTree(){
var root = null;

this.init_tree = function(arr){
   var min_heap = new MinHeap();
   min_heap.init(arr);
  
   for(var i = 0;i < arr.length - 1; i++){
       var first = min_heap.remove_min();
       var second = min_heap.remove_min();
           var new_item = new CodeNode("", first.data.rate + second.data.rate);
           var new_node = new TreeNode(new_item);
           min_heap.insert(new_node);

           new_node.leftChild = first;
           new_node.rightChild = second;
           first.parent = new_node;
           second.parent = new_node;

           root = new_node;           
   }
};

var get_code_from_tree = function(node, dict, code_str){
   if(!node.leftChild && !node.rightChild){
                    // узел страницы
       dict[node.data.code] = code_str;
       return;
   }

   if(node.leftChild){
       get_code_from_tree(node.leftChild, dict, code_str+"0");
   }
   if(node.rightChild){
       get_code_from_tree(node.rightChild, dict, code_str+"1");
   }
};

this.get_code = function(){
            // Получаем окончательную кодировку переменной длины
   var code_dict = {};
   get_code_from_tree(root, code_dict, "");
   return code_dict;
};

this.print = function(){
   console.log(root);
};
};
// Реализация минимальной кучи
function MinHeap(size){
var heap = new Array(size);
var curr_size = 0;
var max_size = size;


var shift_down = function(start, m){
            // Из начальной позиции сдвиньте вниз, чтобы настроить
            var parent_index = start; // start - текущий локальный родительский узел
            var min_child_index = parent_index * 2 + 1; // Должен быть левый потомок, сначала пусть min_child_index равен индексу левого потомка

   while(min_child_index <= m){
                    // min_child_index + 1 - индекс левого потомка, левый потомок больше правого
       if(min_child_index < m && heap[min_child_index].data.rate > heap[min_child_index+1].data.rate){
                            min_child_index = min_child_index + 1; // min_child_index всегда указывает на ребенка с меньшим значением
       }

                    // Значение родительского узла меньше или равно минимуму двух дочерних узлов
       if(heap[parent_index].data.rate <= heap[min_child_index].data.rate){
                            break; // Конец цикла, настраивать не нужно
       }else{
                            // Обмен значениями родительского узла и дочернего узла
           var tmp = heap[parent_index];
           heap[parent_index] = heap[min_child_index];
           heap[min_child_index] = tmp;
           parent_index = min_child_index;
           min_child_index = 2*min_child_index + 1;
       }
   }

};

    // Передаем массив и установим размер кучи наименьшего размера
this.init = function(arr){
   max_size = arr.length;
   curr_size = max_size;
   heap = new Array(arr.length);
            // Заполняем кучу, это еще не куча
   for(var i =0; i<curr_size;i++){
       heap[i] = arr[i];
   }

            var curr_pos = Math.floor (curr_size / 2); // Это последний узел ветвления кучи
   while(curr_pos >= 0){
                    shift_down (curr_pos, curr_size-1); // частичная корректировка сверху вниз
                    curr_pos -= 1; // настраиваем следующий узел ветки
   }
};

var shift_up = function(start){
            var child_index = start; // Текущий узел является листовым узлом
            var parent_index = Math.floor ((child_index-1) / 2); // находим родительский узел


   while(child_index > 0){
                    // Родительский узел меньше, поэтому нет необходимости настраивать
       if(heap[parent_index].data.rate <= heap[child_index].data.rate){
           break;
       }else{
                            // Обмен значениями родительского узла и дочернего узла
           var tmp = heap[child_index];
           heap[child_index] = heap[parent_index];
           heap[parent_index] = tmp;
           child_index = parent_index;
           parent_index = Math.floor((parent_index-1)/2);
       }
   }
};

this.insert = function(item){
            // вставляем новый элемент
            // Заполнено, элементов больше нет
   if(curr_size == max_size){
       return false;
   }

   heap[curr_size] = item;
   shift_up(curr_size);
   curr_size++;
   return true;
};

    // Удаляем минимум
this.remove_min = function(){
   if(curr_size <= 0){
       return null;
   }
   var min_value = heap[0];
   heap[0] = heap[curr_size-1];
   curr_size--;
   shift_down(0, curr_size-1);
   return min_value;
};

this.size = function(){
   return curr_size;
};

this.print = function(){
   console.log(heap);
};
};
var huffman_tree = new HuffmanTree();
huffman_tree.init_tree(forest);
result =  huffman_tree.get_code();
console.log(result)
summ = 0
for (key in code_dict){
    summ+= (code_dict[key]) * 10
}
summ_p = 0
for (key in code_dict){
    p = (code_dict[key]) / summ * 10
    summ_p+=   p * Math.log2(1/p)
}
console.log('H: ',summ_p)