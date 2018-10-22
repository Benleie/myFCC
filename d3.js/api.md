### global
d3.select()
d3.selectAll()
d3.scaleLinear()
d3.axisBottom()
d3.range()

### selection
data()  enter()    exit()   刷新数据
append()   remove()         更新DOM
style()
text()
attr()


### transition 
selection.transition()  通常在新数据刷新和插入后，对已有的attr执行动画特效
transition.duration()    default:250ms  
transition.ease()        default:d3.easeCubicInOut
transition.delay()




###　axis
d3.axisBottom()
axis.scale()
axis.ticks()
axis.tickvalues()


## https://d3js.org/d3.v3.min.js
### d3.layout
Bundle  Chord       Cluster   Force  Hierarchy    Histogram
Pack    Partition   Pie       Stack  Tree         TreeMap 