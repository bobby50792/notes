---
sidebar_position: 100
---

#  Problems

1. Consider a system of linear questions

$$
\begin{equation*}
(a_1 + b)x_1 + a_2 x_2 + a_3 x_3 + \cdots + a_n x_n = 0
\end{equation*}
$$

$$
\begin{equation*}
a_1 x_1 + (a_2 + b)x_2 + a_3 x_3 + \cdots + a_n x_n = 0
\end{equation*}
$$

$$
\begin{equation*}
a_1 x_1 + a_2 x_2 + (a_3 + b)x_3 + \cdots + a_n x_n = 0
\end{equation*}
$$

$$
\begin{equation*}
\vdots
\end{equation*}
$$

$$
\begin{equation*}
a_1 x_1 + a_2 x_2 + a_3 x_3 + \cdots + (a_n + b)x_n = 0
\end{equation*}
$$

where $\sum_{i=1}^n a_i \ne 0$.



Determine the relationship between $a_1, a_2, \cdots, a_n$ and $b$ such that



a. This linear system has only a zero solution. 

b. This system has nonzero solutions. In this case, determine a solution set. 



2. Prove

$$
\begin{equation*}
\operatorname{rank}(L_A) + \operatorname{rank}(L_B) - n \;\le\; \operatorname{rank}(L_{AB}) \;\le\; \min\{\operatorname{rank}(L_A), \operatorname{rank}(L_B)\},
\end{equation*}
$$

​	where $A$ and $B$ are $n \times n$ matrices.



3. Prove

$$
\begin{equation*}
\operatorname{rank}(L_{A+B}) \;\le\; \operatorname{rank}(L_A) + \operatorname{rank}(L_B)
\end{equation*}
$$

​	where $A$ and $B$ are $n \times m$ matrices.



4. Let $A, B \in M_{n \times n}(\mathbb{R})$. Suppose $AB = BA = 0$ and $\operatorname{rank}(A^2) = \operatorname{rank}(A)$. Prove that

	$$
	\begin{equation*}
	\operatorname{rank}(A + B) = \operatorname{rank}(A) + \operatorname{rank}(B)
	\end{equation*}
	$$



5. Let $A, B, C, D$ be $n \times n$ matrices such that they commute pairwise under matrix multiplication, and $AC + BD = I_n$. Prove that:

	$$
	\begin{equation*}
	\operatorname{rank}(AB) = \operatorname{rank}(A) + \operatorname{rank}(B) - n.
	\end{equation*}
	$$



6. $A$ is an $n \times n$ real matrix, $AA^t = k^2 I_n$, $k \in \mathbb{R}$. Prove:

	$$
	\begin{equation*}
	\operatorname{rank}(k I_n - A) = \operatorname{rank}\big((k I_n - A)^2\big).
	\end{equation*}
	$$



7. Suppose $A$ is an $n \times n$ matrix with rank $r$ ($1 \le r \le \frac{n}{2}$), and $A^2 = 0$.  Prove that there exists an invertible matrix $P$ such that
	$$
	\begin{equation*}
	A
	=
	P
	\begin{pmatrix}
	0 & I_r & 0 \\
	0 & 0 & 0 \\
	0 & 0 & 0
	\end{pmatrix}
	P^{-1}
	\end{equation*}
	$$

	where $I_r$ is the $r \times r$ identity matrix, and $0$ are zero matrices.