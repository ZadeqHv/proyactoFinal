import product from "../models/products"


export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body

    const newProduct = new product({ name, category, price, imgURL });

    const productSave = await newProduct.save()

    res.json(productSave)
}
export const getProducs = async (req, res) => {
    const products = await product.find();
    res.json(products
    )
}
export const getProductById = async (req, res) => {
    const { productId } = req.params;

    const Product = await product.findById(productId);
    res.status(200).json(Product);
};

export const upDateProductById = async (req, res) => {
    const upDateProducto = await product.findByIdAndUpdate(req.params.productId, req.body ,{
        new: true 
    })
    res.status(200).json(upDateProducto)
}

export const delateProductById = async (req, res) => {
    const {productId} = req.params;
    await  product.findByIdAndDelete(productId)
    res.status(204)
}