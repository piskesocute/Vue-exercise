import { ref , onMounted , unMounted} from "vux";
export function mouseMovePosition() {
    const x =ref(0)
    const y =ref(0)
    const mousePosition=(e)=>{
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(()=>{
        window.addEventListener("mousemove",mousePosition)
    })
    
    unMounted(()=>{
        window.remooveEventListener("mousemove",mousePosition)
    })

    return{ x , y}
}