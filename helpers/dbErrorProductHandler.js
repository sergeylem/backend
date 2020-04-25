exports.dbErrorProductHandler = fields => {
    let message = "";

    const {
        name,
        sku,
        image,
        category,
        tag,
        price,
        discount,
        saleCount,
        stock,
        shortDescription,
        fullDescription,
        model,
        performance
    } = fields;

    if (!name)
        message = "Name is required !"
    else
        if (!sku)
            message = "SKU code is required !"
        else
            if (!image)
                message = "Image is required !"
            else
                if (!category)
                    message = "Category is required !"
                else
                    if (!tag)
                        message = "Tag is required !"
                    else
                        if (!price)
                            message = "Price is required !"
                        else
                            if (!discount)
                                message = "Discount is required !"
                            else
                                if (!saleCount)
                                    message = "SaleCount is required !"
                                else
                                    if (!stock)
                                        message = "Stock is required !"
                                    else
                                        if (!shortDescription)
                                            message = "Short description is required !"
                                        else
                                            if (!fullDescription)
                                                message = "Full description is required !"
                                            else
                                                if (!model)
                                                    message = "Model is required !"
                                                else
                                                    if (!performance)
                                                        message = "Performance is required !"

    return message;
}