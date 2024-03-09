import React from 'react';

interface Category {
    label: string;
}

const Category = () => {
    const categories = [
        "Food & Drinks", "Shopping", "Housing", "Transportation", "Vehicle", "Life & Entertainment", 'Communication, PC', "Financial expenses", 'Investments', "Income", "Others"
    ];

    const mappedCategories: Category[] = categories.map(category => ({ label: category }));

    return (
        <div>
            {mappedCategories.map(category => (
                <div key={category.label}>{category.label}</div>
            ))}
        </div>
    );
}

export default Category;
