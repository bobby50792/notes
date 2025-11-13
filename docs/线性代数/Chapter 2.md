---
sidebar_position: 2
---

# Linear Transformations and Matrices



## Linear transformation

Let $V$ and $W$ be vector spaces over a field $F$.  A function $T : V \to W$ is called a **linear transformation** from $V$ to $W$ if,  for all $x, y \in V$ and $c \in F$, the following conditions hold:
$$
\begin{equation*}
\text{(a)}\quad T(x + y) = T(x) + T(y)
\end{equation*}
$$

$$
\begin{equation*}
\text{(b)}\quad T(cx) = c\,T(x)
\end{equation*}
$$



A transformation $T : V \to W$ is linear **if and only if**

$$
\begin{equation*}
T(cx + y) = c\,T(x) + T(y)
\end{equation*}
$$

for all $x, y \in V$ and all scalars $c \in F$.



### **Identity transformation**
The identity transformation $I_V : V \to V$ is defined by  
$$
\begin{equation*}
I_V(x) = x \quad \text{for all } x \in V.
\end{equation*}
$$

We often write $I$ instead of $I_V$.



### **Zero transformation**

The zero transformation $T_0 : V \to W$ is defined by  
$$
\begin{equation*}
T_0(x) = 0 \quad \text{for all } x \in V.
\end{equation*}
$$

It is clear that both of these transformations are linear.



Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear.



### Null space (Kernel)

We define the **null space** (or **kernel**) of $T$, denoted $N(T)$, to be the set of all vectors $x \in V$ such that $T(x) = 0$. That is,

$$
\begin{equation*}
N(T) = \{\, x \in V : T(x) = 0 \,\}.
\end{equation*}
$$



### Range (Image)

We define the **range** (or **image**) of $T$, denoted $R(T)$, to be the subset of $W$ consisting of all images $T(x)$ of vectors $x \in V$. That is,

$$
\begin{equation*}
R(T) = \{\, T(x) : x \in V \,\}.
\end{equation*}
$$


Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear. If $N(T)$ and $R(T)$ are finite-dimensional, then we define the **nullity** of $T$, denoted $\operatorname{nullity}(T)$, and the **rank** of $T$, denoted $\operatorname{rank}(T)$, to be the dimensions of $N(T)$ and $R(T)$, respectively.



### Theorems

1. Let $V$ and $W$ be vector spaces and $T : V \to W$ be linear.  Then $N(T)$ and $R(T)$ are subspaces of $V$ and $W$, respectively.



2. Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear.  If $\beta = \{v_1, v_2, \ldots, v_n\}$ is a basis for $V$, then
	$$
	\begin{equation*}
	R(T) = \operatorname{span}(T(\beta)) 
	      = \operatorname{span}(\{T(v_1), T(v_2), \ldots, T(v_n)\}).
	\end{equation*}
	$$



3. (**Dimension Theorem**) Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear. If $V$ is finite-dimensional, then
	$$
	\begin{equation*}
	\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim(V).
	\end{equation*}
	$$



4. Let $V$ and $W$ be vector spaces, and let $T: V \to W$ be linear.  Then $T$ is one-to-one **if and only if** $N(T) = \{0\}$.



5. Let $V$ and $W$ be vector spaces of equal (finite) dimension,  and let $T: V \to W$ be linear. Then the following are equivalent:

	- $T$ is one-to-one.  

	- $T$ is onto.  
	- $\operatorname{rank}(T) = \dim(V)$.



6. Let $V$ and $W$ be vector spaces over $F$, and suppose that  $\{v_1, v_2, \ldots, v_n\}$ is a basis for $V$.  For $w_1, w_2, \ldots, w_n$ in $W$, there exists exactly one linear transformation  $T: V \to W$ such that $T(v_i) = w_i$ for $i = 1, 2, \ldots, n$.

	

	Corollary: Let $V$ and $W$ be vector spaces, and suppose that $V$ has a finite basis  $\{v_1, v_2, \ldots, v_n\}$.  If $U, T : V \to W$ are linear and $U(v_i) = T(v_i)$ for  $i = 1, 2, \ldots, n$, then $U = T$.



## The matrix representation of a linear transformation

Let $V$ be a finite-dimensional vector space. An **ordered basis** for $V$ is a basis for $V$ endowed with a specific order; that is, an ordered basis for $V$ is a finite sequence of linearly independent vectors in $V$ that generates $V$.



### Coordinate vector

Let $ \beta = \{u_1, u_2, \dots, u_n\} $ be an ordered basis for a finite-dimensional vector space $V$.  For $x \in V$, let $a_1, a_2, \dots, a_n$ be the unique scalars such that
$$
\begin{equation*}
x = \sum_{i=1}^{n} a_i u_i.
\end{equation*}
$$



We define the **coordinate vector of $x$ relative to $\beta$**, denoted $[x]_\beta$, by
$$
\begin{equation*}
[x]_\beta =
\begin{pmatrix}
a_1 \\
a_2 \\
\vdots \\
a_n
\end{pmatrix}.
\end{equation*}
$$


Let us now proceed with the promised matrix representation of a linear transformation.  



Suppose that $V$ and $W$ are finite-dimensional vector spaces with ordered bases  $ \beta = \{v_1, v_2, \dots, v_n\} $ and $ \gamma = \{w_1, w_2, \dots, w_m\} $, respectively.  Let $T : V \to W$ be linear. Then for each $j$, $1 \le j \le n$, there exist unique scalars  $a_{ij} \in F$, $1 \le i \le m$, such that
$$
\begin{equation*}
T(v_j) = \sum_{i=1}^{m} a_{ij} w_i \qquad \text{for } 1 \le j \le n.
\end{equation*}
$$

Using the notation above, we call the $m \times n$ matrix $A$ defined by  $A_{ij} = a_{ij}$ the **matrix representation of $T$ in the ordered bases $\beta$ and $\gamma$**  and write  
$$
\begin{equation*}
A = [T]_{\beta}^{\gamma}.
\end{equation*}
$$
If $V = W$ and $\beta = \gamma$, then we write simply  
$$
\begin{equation*}
A = [T]_{\beta}.
\end{equation*}
$$
Notice that the $j$th column of $A$ is simply $[\,T(v_j)\,]_{\gamma}$.  Also observe that if $U : V \to W$ is a linear transformation such that  $[U]_{\beta}^{\gamma} = [T]_{\beta}^{\gamma}$,  then $U = T$.



Let $T, U : V \to W$ be arbitrary functions, where $V$ and $W$ are vector spaces over $F$,  and let $a \in F$.  We define $T + U : V \to W$ by
$$
\begin{equation*}
(T + U)(x) = T(x) + U(x) \qquad \text{for all } x \in V,
\end{equation*}
$$

and $aT : V \to W$ by

$$
\begin{equation*}
(aT)(x) = a\,T(x) \qquad \text{for all } x \in V.
\end{equation*}
$$


Let $V$ and $W$ be vector spaces over $F$.  We denote the vector space of all linear transformations from $V$ into $W$ by $\mathcal{L}(V, W)$.  In the case that $V = W$, we write $\mathcal{L}(V)$ instead of $\mathcal{L}(V, W)$.



### Theorems

1. Let $V$ and $W$ be finite-dimensional vector spaces with ordered bases $\beta$ and $\gamma$, respectively,  and let $T, U : V \to W$ be linear transformations. Then

	(a)

	$$
	\begin{equation*}
	[T + U]_{\beta}^{\gamma}
	= [T]_{\beta}^{\gamma} + [U]_{\beta}^{\gamma}
	\end{equation*}
	$$

	and

	(b)

	$$
	\begin{equation*}
	[aT]_{\beta}^{\gamma}
	= a [T]_{\beta}^{\gamma}
	\qquad \text{for all scalars } a.
	\end{equation*}
	$$





## Composition of linear transformations and matrix multiplication

Let $V$, $W$, and $Z$ be vector spaces over the same field $F$,  and let $T : V \to W$ and $U : W \to Z$ be linear.  Then $UT : V \to Z$ is linear.



## Matrix multiplication

Let $T : V \to W$ and $U : W \to Z$ be linear transformations, and let  $A = [U]_{\beta}^{\gamma}$ and $B = [T]_{\alpha}^{\beta}$, where  $\alpha = \{v_1, v_2, \dots, v_n\}$,  $\beta = \{w_1, w_2, \dots, w_m\}$, and  $\gamma = \{z_1, z_2, \dots, z_p\}$  are ordered bases for $V$, $W$, and $Z$, respectively.

We would like to define the product $AB$ of two matrices so that  
$$
\begin{equation*}
AB = [UT]_{\alpha}^{\gamma}.
\end{equation*}
$$

Consider the matrix $[UT]_{\alpha}^{\gamma}$.  For $1 \le j \le n$, we have

$$
\begin{equation*}
(UT)(v_j)
= U(T(v_j))
= U \!\left( \sum_{k=1}^{m} B_{kj} w_k \right)
= \sum_{k=1}^{m} B_{kj} \, U(w_k)
\end{equation*}
$$

$$
\begin{equation*}
= \sum_{k=1}^{m} B_{kj} \left( \sum_{i=1}^{p} A_{ik} z_i \right)
= \sum_{i=1}^{p} \left( \sum_{k=1}^{m} A_{ik} B_{kj} \right) z_i
\end{equation*}
$$

$$
\begin{equation*}
= \sum_{i=1}^{p} C_{ij} \, z_i,
\end{equation*}
$$

where

$$
\begin{equation*}
C_{ij} = \sum_{k=1}^{m} A_{ik} B_{kj}.
\end{equation*}
$$

This computation motivates the following definition of matrix multiplication.



We define the **Kronecker delta** $\delta_{ij}$ by $\delta_{ij} = 1$ if $i = j$ and  $\delta_{ij} = 0$ if $i \ne j$.  The $n \times n$ **identity matrix** $I_n$ is defined by $(I_n)_{ij} = \delta_{ij}$.

Thus, for example,

$$
\begin{equation*}
I_1 = (1), \qquad
I_2 = 
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix},
\qquad \text{and} \qquad
I_3 =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}.
\end{equation*}
$$

#### Theorems

Let $A$ be an $m \times n$ matrix, $B$ and $C$ be $n \times p$ matrices,  and $D$ and $E$ be $q \times m$ matrices. Then

1. $A(B + C) = AB + AC$ and $(D + E)A = DA + EA$.

2. $a(AB) = (aA)B = A(aB)$ for any scalar $a$.

3. $I_m A = A = A I_n$.

4. If $V$ is an $n$-dimensional vector space with an ordered basis $\beta$,  then $[I_V]_{\beta} = I_n$.

	

Let $V$ and $W$ be finite-dimensional vector spaces having ordered bases  $\beta$ and $\gamma$, respectively, and let $T : V \to W$ be linear.  Then, for each $u \in V$, we have

$$
\begin{equation*}
[T(u)]_{\gamma}
= [T]_{\beta}^{\gamma} [u]_{\beta}.
\end{equation*}
$$


### **Left-multiplication transformation**

Let $A$ be an $m \times n$ matrix with entries from a field $F$.  We denote by $L_A$ the mapping $L_A : F^n \to F^m$ defined by  $L_A(x) = Ax$ (the matrix product of $A$ and $x$) for each column vector $x \in F^n$.  We call $L_A$ a **left-multiplication transformation**.



#### Theorems

Let $A$ be an $m \times n$ matrix with entries from $F$.  Then the left-multiplication transformation $L_A : F^n \to F^m$ is linear.  Furthermore, if $B$ is any other $m \times n$ matrix (with entries from $F$)  and $\beta$ and $\gamma$ are the standard ordered bases for $F^n$ and $F^m$, respectively,  then we have the following properties.

1. $[L_A]_{\beta}^{\gamma} = A$.

2. $L_A = L_B$ if and only if $A = B$.

3. $L_{A+B} = L_A + L_B$ and $L_{aA} = a L_A$ for all $a \in F$.

4. If $T : F^n \to F^m$ is linear, then there exists a unique $m \times n$ matrix $C$  such that $T = L_C$.  In fact, $C = [T]_{\beta}^{\gamma}$.

5. If $E$ is an $n \times p$ matrix, then $L_{AE} = L_A L_E$.

6. If $m = n$, then $L_{I_n} = I_{F^n}$.



## Invertibility and isomorphisms

### Invertibility

Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear.  A function $U : W \to V$ is said to be an **inverse** of $T$ if  $TU = I_W$ and $UT = I_V$.  If $T$ has an inverse, then $T$ is said to be **invertible**.  As noted in Appendix B, if $T$ is invertible, then the inverse of $T$ is unique  and is denoted by $T^{-1}$.



We often use the fact that a function is invertible if and only if it is both  one-to-one and onto. 



Let $V$ and $W$ be vector spaces, and let $T : V \to W$ be linear and invertible.  Then $T^{-1} : W \to V$ is linear.



Let $A$ be an $n \times n$ matrix.  Then $A$ is **invertible** if there exists an $n \times n$ matrix $B$ such that  $AB = BA = I$.



#### Theorems

1. Let $T$ be an invertible linear transformation from $V$ to $W$.  Then $V$ is finite-dimensional if and only if $W$ is finite-dimensional.  In this case,  $\dim(V) = \dim(W)$.



2. Let $V$ and $W$ be finite-dimensional vector spaces with ordered bases  $\beta$ and $\gamma$, respectively.  Let $T : V \to W$ be linear.  Then $T$ is invertible if and only if $[T]_{\beta}^{\gamma}$ is invertible.  Furthermore,$[T^{-1}]_{\gamma}^{\beta} = ([T]_{\beta}^{\gamma})^{-1}$.



### Isomorphisms  
Let $V$ and $W$ be vector spaces.  We say that $V$ is **isomorphic** to $W$ if there exists a linear transformation  $T : V \to W$ that is invertible.  Such a linear transformation is called an **isomorphism** from $V$ onto $W$.



#### Theorems  

1. Let $V$ and $W$ be finite-dimensional vector spaces (over the same field).  Then $V$ is isomorphic to $W$ if and only if $\dim(V) = \dim(W)$.
