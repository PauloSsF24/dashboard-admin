// src/pages/Products.jsx
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [editando, setEditando] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const produtosRef = collection(db, "produtos");

  // Buscar produtos
  const buscarProdutos = async () => {
    const dados = await getDocs(produtosRef);
    setProdutos(dados.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  // Adicionar ou atualizar
  const onSubmit = async (data) => {
    if (editando) {
      const produtoRef = doc(db, "produtos", editando);
      await updateDoc(produtoRef, data);
      setEditando(null);
    } else {
      await addDoc(produtosRef, data);
    }
    reset();
    buscarProdutos();
  };

  // Deletar
  const deletarProduto = async (id) => {
    await deleteDoc(doc(db, "produtos", id));
    buscarProdutos();
  };

  // Editar
  const editarProduto = (produto) => {
    setEditando(produto.id);
    setValue("nome", produto.nome);
    setValue("preco", produto.preco);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Gerenciar Produtos</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <input
          {...register("nome")}
          placeholder="Nome do produto"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          {...register("preco")}
          placeholder="Preço"
          type="number"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editando ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{produto.nome}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                R$ {Number(produto.preco).toFixed(2)}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => editarProduto(produto)}
                className="px-2 py-1 text-sm bg-yellow-400 text-black rounded"
              >
                Editar
              </button>
              <button
                onClick={() => deletarProduto(produto.id)}
                className="px-2 py-1 text-sm bg-red-600 text-white rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
