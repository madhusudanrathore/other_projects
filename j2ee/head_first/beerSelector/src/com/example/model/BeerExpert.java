package com.example.model;

import java.util.*;

public class BeerExpert{
	public List getBrands( String color ){
		List<String> brands = new ArrayList<String>();
		if( color.equals("A")){
			brands.add("MADHU1");
			brands.add("MADHU2");
			brands.add("MADHU3");
			brands.add("MADHU4");
		}else{
			brands.add("SUDAN1");
			brands.add("SUDAN2");
			brands.add("SUDAN3");
			brands.add("SUDAN4");
		}
		return (brands);
	}
}