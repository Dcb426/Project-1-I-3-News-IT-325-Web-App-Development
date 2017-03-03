fun first f nil = NONE
| first f (h::t) = 
 	if f h then SOME h 
 	else first f t;


fun last f nil = NONE
| last f (h::t) = 
	let fun second nil = NONE
	| second [x] = SOME x
	| second(y::ys) = second(ys)
	in second(List.filter f (h::t))
	end;

fun intstr L = 
		let fun positive (y,x) = if (x < 10) then implode( Char.chr((x mod 10) + 48)::y) else positive(Char.chr((x mod 10) + 48)::y,(x div 10));
		 	fun negative(y,x) = if (x > ~10)  then implode( #"~"::Char.chr((abs(x) mod 10) + 48)::y) else negative (Char.chr((abs(x) mod 10) +48)::y , (x div 10)+1);
	     	fun start (y,x) = if (x < 0) then negative (y,x) else positive (y,x);
	in start ([],L)
	end;
	
fun listify nil = []
|   listify [x] = [[x]]
|   listify (x::y::z) =
    let val h::t = listify (y::z) in
        if x <= y then
            (x::h) :: t
        else
            [x]::h::t
    end;