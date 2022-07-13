package com.devkayson.giraalfajor.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devkayson.giraalfajor.entities.Sale;
import com.devkayson.giraalfajor.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired 
	private SaleRepository repository;
	
	// busca todas as vendas
	public List<Sale> findSales() {
		return repository.findAll();
	}
	
	
}
