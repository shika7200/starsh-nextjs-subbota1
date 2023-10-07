import Card from '@/entities/things/Card'
import InputCard from '@/entities/things/InputCard'
import { Products } from '../types';

export default async function InputOutput() {
    const url = "https://65193ac1818c4e98ac602a04.mockapi.io/products"
    const response = await fetch(url);
    const products:Products = await response.json();
  return (
    <>
   <InputCard/>
    <Card head="ахахахаха" text="Тимофей"/>
    <Card head="нюхать за 500" text="Назар"/>
    <Card head="за сотку" text="Рашид"/>
    </> 
  )
}
