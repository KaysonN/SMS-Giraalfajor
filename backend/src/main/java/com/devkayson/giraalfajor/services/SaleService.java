package com.devkayson.giraalfajor.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devkayson.giraalfajor.entities.Sale;
import com.devkayson.giraalfajor.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired 
	private SaleRepository repository;
	
	// busca todas as vendas
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		//pega a data atual
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		return repository.findSales(min, max, pageable);
	}
	
	
}
