---
sidebar_position: 100
---

# Problems

1. Assume that $\lim\limits_{n\to\infty} a_n = L$，Prove that  
	$$
	\begin{equation*}
	\lim_{n\to\infty} 
	\frac{a_1 + 2 a_2 + \cdots + n a_n}{1+2+\cdots+n}
	= L.
	\end{equation*}
	$$



2. Let $\{x_n\}$ be a sequence in $(0,1)$ whose terms are all distinct.  

​	a. Prove that: if there exists $a \in (0,1)$ such that for all $n \in \mathbb{N}^+$,
$$
\begin{equation*}
\frac{x_{n+2} - x_n}{x_{n+1} - x_n} \in (a,1),
\end{equation*}
$$
​	then the sequence $\{x_n\}$ is convergent.

​	b. Let $c \in \left(0,\frac{3}{4}\right)$, and let $\{x_n\}$ satisfy $x_1 \in (0,1)$ and for all $n \in \mathbb{N}^+$,
$$
\begin{equation*}
x_{n+1} = 1 - c x_n^2.
\end{equation*}
$$
​	Prove that $\{x_n\}$ is convergent and find its limit.



3. Assume that
	$$
	\begin{equation*}
	\lim_{n\to +\infty} a_n = A,\qquad 
	A \in \mathbb{R}\ \text{or}\ A = +\infty\ \text{or}\ A = -\infty.
	\end{equation*}
	$$

	For each positive integer $n$, let $t_{n1},\ldots,t_{nn}$ be $n$ non-negative real numbers satisfying
	$$
	\begin{equation*}
	t_{n1} + \cdots + t_{nn} = 1,
	\end{equation*}
	$$
	and for any fixed positive integer $k$,
	$$
	\begin{equation*}
	\lim_{n\to+\infty} t_{nk} = 0.
	\end{equation*}
	$$

	**Prove that**
	$$
	\begin{equation*}
	\lim_{n\to+\infty} \left(t_{n1}a_1 + \cdots + t_{nn}a_n\right) = A.
	\end{equation*}
	$$



4. Assume that $q(x) < 0$ for all $x \in (a,b)$.  Consider the boundary value problem
	$$
	\begin{equation*}
	\begin{cases}
	y'' + p(x)y' + q(x)y = r(x), & a < x < b,\\[6pt]
	y(a) = A,\quad y(b) = B.
	\end{cases}
	\end{equation*}
	$$

	**Prove that**:  If the boundary value problem has a solution, then this solution must be unique.



5. Let $f$ be differentiable on $[0,+\infty)$, satisfying  
	$$
	\begin{equation*}
	f(0)=0, \qquad f' \text{ is strictly increasing}.
	\end{equation*}
	$$

	Prove that the function
	$$
	\begin{equation*}
	\frac{f(x)}{x}
	\end{equation*}
	$$
	is strictly increasing on $(0, +\infty)$.



6. Let $0 < a < b$. Compare the sizes of the following three quantities:

	$$
	\begin{equation*}
	\sqrt{ab}, \qquad 
	\frac{b-a}{\ln b - \ln a}, \qquad
	\frac{a+b}{2}.
	\end{equation*}
	$$



7. Let $f$ be a $C^\infty$ function and define
	$$
	\begin{equation*}
	g(x) = f(\ln x).
	\end{equation*}
	$$

	Prove that for every positive integer $n$,
	$$
	\begin{equation*}
	x^n \frac{d^n y}{dx^n}
	=
	\left( \frac{d}{dt} - (n-1) \right)
	\cdots
	\left( \frac{d}{dt} - 1 \right)
	\frac{d}{dt} f(t),
	\end{equation*}
	$$
	where  
	$$
	\begin{equation*}
	t = \ln x.
	\end{equation*}
	$$



8. Define
	$$
	\begin{equation*}
	P_n(x) = e^x \frac{d^n}{dx^n}\left( e^{-x} x^n \right).
	\end{equation*}
	$$



​	Prove that:
$$
\begin{equation*}
P_n(x) \text{ has } n \text{ distinct positive zeros.}
\end{equation*}
$$


9. Compute the limit
	$$
	\begin{equation*}
	\lim_{x \to 0}
	\frac{
	1 - \cos x \sqrt{\cos 2x}\, \sqrt[3]{\cos 3x}
	}{
	x^2
	}.
	\end{equation*}
	$$
	



10. Evaluate the integral:

$$
\begin{equation*}
\int \frac{dx}{\sin^3 x + \cos^3 x}.
\end{equation*}
$$



11. Evaluate the integral:
	$$
	\begin{equation*}
	\int \tan(x)\,\sqrt{\,2 + \sqrt{4 + \cos x}\,}\,dx
	\end{equation*}
	$$
	



12. Evaluate the integral:
	$$
	\begin{equation*}
	\int_{0}^{\infty} \frac{dx}{\bigl(x + 1 + \lfloor 2\sqrt{x} \rfloor\bigr)^2}
	\end{equation*}
	$$
	



13. Prove the following inequalities:

	a. For any $x \in [0,\pi]$ and $t \in [0,1]$, we have  $\sin(tx) \ge t \sin x.$

	b. For any $x \ge 0$ and $p>0$, we have  
	$$
	\begin{equation*}
	\int_{0}^{x} |\sin u|^{p}\, du 
	\ge \frac{x\, |\sin x|^{p}}{p+1}.
	\end{equation*}
	$$
	



14. Find an integrable function $f$ on $[0,1]$ such that for every $x \in [0,1]$.
	$$
	\begin{equation*}
	f(x) = 1 + (1-x) \int_{0}^{x} y f(y)\, dy 
	      + x \int_{x}^{1} (1-y) f(y)\, dy .
	\end{equation*}
	$$
