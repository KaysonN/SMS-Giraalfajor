package com.devkayson.giraalfajor.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devkayson.giraalfajor.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	//(salva, deleta, atualiza e busca)
}
