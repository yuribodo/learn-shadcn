
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function GetRecipe(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  return result.json()
}


export default async function Home() {

  const recipes = await GetRecipe()


  return (
   <main>
    <div className=" grid grid-cols-3 gap-8">
      {recipes.map(recipe => (
        <Card key={recipe.id} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">
            <div>
              <CardTitle>
                {recipe.title}
              </CardTitle>
              <CardDescription>
                  {recipe.time} mins to cook.
              </CardDescription>
            </div>
            
          </CardHeader>
          <CardContent>
            <div>
              <p>{recipe.description}</p>
            </div>
          </CardContent>
          <CardFooter className=" flex justify-between">
            <button>View</button>
            {recipe.vegan && <p>Vegan!</p>}
          </CardFooter>
        </Card>
      ))}
    </div>
    
   </main>
  );
}
